/* Hotel website interactions — no libraries needed. */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const body = document.body;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header on scroll ---------- */
  const header = $('.site-header');
  const onScroll = () => {
    header?.classList.toggle('scrolled', scrollY > 40);
    body.classList.toggle('past-hero', scrollY > innerHeight * 0.6);
  };
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile / overlay menu ---------- */
  const toggle = $('.nav-toggle');
  const setMenu = (open) => {
    body.classList.toggle('nav-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
  };
  toggle?.addEventListener('click', () => setMenu(!body.classList.contains('nav-open')));
  $$('.site-nav a, .menu-overlay a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ---------- Reveal on scroll ---------- */
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Animated counters ---------- */
  const counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const co = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length;
      co.unobserve(el);
      if (reduceMotion) { el.textContent = end.toLocaleString('en-US', { minimumFractionDigits: dec }); return; }
      const t0 = performance.now(), dur = 1600;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur), v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), { threshold: 0.6 });
    counters.forEach(el => co.observe(el));
  }

  /* ---------- Hero slideshow ---------- */
  $$('[data-slideshow]').forEach(show => {
    const slides = $$('.slide', show), dots = $$('[data-dot]', show);
    if (slides.length < 2) return;
    let i = 0, timer;
    const go = (n) => {
      slides[i].classList.remove('active'); dots[i]?.classList.remove('active');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('active'); dots[i]?.classList.add('active');
    };
    const start = () => { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => go(i + 1), 6500); };
    dots.forEach((d, n) => d.addEventListener('click', () => { go(n); start(); }));
    start();
  });

  /* ---------- Carousels (prev / next buttons) ---------- */
  $$('[data-carousel]').forEach(c => {
    const track = $('[data-track]', c);
    if (!track) return;
    const step = () => {
      const first = track.children[0];
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return first ? first.getBoundingClientRect().width + gap : track.clientWidth;
    };
    $('[data-prev]', c)?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    $('[data-next]', c)?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  });

  /* ---------- Rotating quotes ---------- */
  $$('[data-quotes]').forEach(q => {
    const items = $$('.quote', q), dots = $$('[data-qdot]', q);
    if (items.length < 2) return;
    let i = 0, timer;
    const go = (n) => {
      items[i].classList.remove('active'); dots[i]?.classList.remove('active');
      i = (n + items.length) % items.length;
      items[i].classList.add('active'); dots[i]?.classList.add('active');
    };
    const start = () => { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => go(i + 1), 7000); };
    dots.forEach((d, n) => d.addEventListener('click', () => { go(n); start(); }));
    $('[data-qprev]', q)?.addEventListener('click', () => { go(i - 1); start(); });
    $('[data-qnext]', q)?.addEventListener('click', () => { go(i + 1); start(); });
    start();
  });

  /* ---------- Tabs ---------- */
  $$('[data-tabs]').forEach(t => {
    const btns = $$('[data-tab]', t), panels = $$('[data-panel]', t);
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(x => x.setAttribute('aria-selected', String(x === b)));
      panels.forEach(p => { p.hidden = p.dataset.panel !== b.dataset.tab; });
    }));
  });

  /* ---------- Image preview that follows the cursor ---------- */
  const preview = $('.hover-preview');
  if (preview && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const pimg = $('img', preview);
    $$('[data-preview]').forEach(row => {
      row.addEventListener('mouseenter', () => { pimg.src = row.dataset.preview; preview.classList.add('show'); });
      row.addEventListener('mouseleave', () => preview.classList.remove('show'));
      row.addEventListener('mousemove', e => {
        preview.style.left = `${e.clientX + 28}px`;
        preview.style.top = `${e.clientY - preview.offsetHeight / 2}px`;
      });
    });
  }

  /* ---------- Gallery lightbox ---------- */
  const lb = $('.lightbox');
  const items = $$('[data-lightbox]');
  if (lb && items.length) {
    const lbImg = $('img', lb), cap = $('.lightbox-caption', lb);
    let idx = 0;
    const show = (n) => {
      idx = (n + items.length) % items.length;
      lbImg.src = items[idx].getAttribute('href');
      lbImg.alt = items[idx].dataset.caption || '';
      cap.textContent = items[idx].dataset.caption || '';
    };
    const close = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); body.classList.remove('locked'); };
    items.forEach((it, n) => it.addEventListener('click', e => {
      e.preventDefault(); show(n);
      lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); body.classList.add('locked');
      $('[data-lb-close]', lb).focus();
    }));
    $('[data-lb-close]', lb).addEventListener('click', close);
    $('[data-lb-prev]', lb).addEventListener('click', () => show(idx - 1));
    $('[data-lb-next]', lb).addEventListener('click', () => show(idx + 1));
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  /* ---------- Dates ---------- */
  const pad = (n) => String(n).padStart(2, '0');
  const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parse = (s) => new Date(`${s}T00:00`);
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const today = new Date();
  const field = (form, name) => form.querySelector(`[name="${name}"]`);

  $$('form').forEach(form => {
    const single = field(form, 'date');
    if (single) { single.min = ymd(today); if (!single.value) single.value = ymd(addDays(today, 7)); }
    const a = field(form, 'arrival'), d = field(form, 'departure');
    if (!a || !d) return;
    a.min = ymd(today);
    d.min = ymd(addDays(today, 1));
    if (!a.value) a.value = ymd(addDays(today, 14));
    if (!d.value) d.value = ymd(addDays(today, 17));
    a.addEventListener('change', () => {
      if (!a.value) return;
      const min = addDays(parse(a.value), 1);
      d.min = ymd(min);
      if (!d.value || parse(d.value) < min) d.value = ymd(addDays(parse(a.value), 3));
    });
  });

  /* ---------- Booking / enquiry modal ---------- */
  const modal = $('#booking');
  const form = $('#booking-form');
  if (modal && form) {
    const mode = form.dataset.mode || 'night';
    const currency = body.dataset.currency || '';
    const locale = body.dataset.locale || 'en-US';
    const taxRate = parseFloat(body.dataset.tax) || 0;
    const fmt = (n) => currency + Math.round(n).toLocaleString(locale);
    const pretty = (s) => s ? parse(s).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';
    const success = $('.booking-success', modal);
    const set = (k, v) => { const el = $(`[data-sum="${k}"]`, modal); if (el) el.textContent = v; };
    const text = (el) => el.tagName === 'SELECT' ? (el.selectedOptions[0]?.textContent || '') : el.value;
    const val = (n) => field(form, n)?.value;
    const nights = () => {
      const a = val('arrival'), d = val('departure');
      return a && d ? Math.max(0, Math.round((parse(d) - parse(a)) / 864e5)) : 0;
    };
    const guestCount = () => {
      if (field(form, 'guests')) return parseFloat(val('guests')) || 1;
      return (parseFloat(val('adults')) || 0) + (parseFloat(val('kids')) || 0) || 1;
    };
    const guestText = () => {
      if (field(form, 'guests')) return text(field(form, 'guests'));
      const adults = +val('adults') || 0, kids = +val('kids') || 0;
      return `${adults} adult${adults === 1 ? '' : 's'}${kids ? `, ${kids} child${kids > 1 ? 'ren' : ''}` : ''}`;
    };
    const update = () => {
      const opt = field(form, 'room')?.selectedOptions[0];
      const rate = parseFloat(opt?.dataset.price) || 0;
      const qty = mode === 'night' ? nights() : mode === 'guest' ? guestCount() : 1;
      const sub = rate * qty, tax = sub * taxRate / 100;
      set('room', opt ? opt.value : '—');
      if (field(form, 'arrival')) set('dates', `${pretty(val('arrival'))} – ${pretty(val('departure'))}`);
      if (field(form, 'date')) set('date', pretty(val('date')));
      if (field(form, 'time')) set('time', text(field(form, 'time')));
      set('guests', guestText());
      const n = nights();
      set('nights', `${n} night${n === 1 ? '' : 's'}`);
      set('rate', fmt(rate));
      set('subtotal', fmt(sub));
      set('taxes', fmt(tax));
      set('total', fmt(sub + tax));
      set('price', opt?.dataset.pricetext || `From ${fmt(rate)}`);
    };
    let lastFocus = null;
    const open = (opts = {}) => {
      lastFocus = document.activeElement;
      Object.entries(opts).forEach(([k, v]) => {
        const el = field(form, k);
        if (!el || v == null || v === '') return;
        if (el.tagName === 'SELECT' && ![...el.options].some(o => o.value === v)) return;
        el.value = v;
      });
      form.hidden = false; success.hidden = true;
      modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); body.classList.add('locked');
      update();
      setTimeout(() => form.querySelector('input, select')?.focus({ preventScroll: true }), 60);
    };
    const close = () => {
      modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); body.classList.remove('locked');
      lastFocus?.focus?.({ preventScroll: true });
    };
    $$('[data-book]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); open({ room: b.dataset.book }); }));
    $$('[data-booking-bar]').forEach(bar => bar.addEventListener('submit', e => {
      e.preventDefault();
      const opts = {};
      $$('[name]', bar).forEach(el => { opts[el.name] = el.value; });
      open(opts);
    }));
    $$('[data-close]', modal).forEach(b => b.addEventListener('click', close));
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    form.addEventListener('submit', e => {
      e.preventDefault();
      const dep = field(form, 'departure');
      if (mode === 'night' && dep && nights() < 1) { dep.setCustomValidity('Departure must be after arrival.'); dep.reportValidity(); dep.setCustomValidity(''); return; }
      const ref = `${body.dataset.code || 'REQ'}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
      const lines = [`Request ${ref}`, ''];
      $$('[name]', form).forEach(el => {
        const label = el.closest('label')?.querySelector('span')?.textContent?.trim() || el.name;
        if (el.type === 'checkbox') lines.push(`${label}: ${el.checked ? 'Yes' : 'No'}`);
        else lines.push(`${label}: ${el.type === 'date' ? pretty(el.value) : (text(el) || '-')}`);
      });
      const total = $('[data-sum="total"]', modal) || $('[data-sum="price"]', modal);
      if (total) lines.push(`Estimate: ${total.textContent}`);
      $('[data-success-name]', modal).textContent = (val('fullname') || '').trim().split(' ')[0] || 'you';
      $('[data-success-ref]', modal).textContent = ref;
      $('[data-success-mail]', modal).href = `mailto:${body.dataset.email}?subject=${encodeURIComponent(`Request ${ref}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
      form.hidden = true; success.hidden = false;
    });
    update();
  }

  /* ---------- Newsletter ---------- */
  $$('[data-newsletter]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    f.innerHTML = '<p class="nl-thanks">Thank you — you are on the list.</p>';
  }));

  /* ---------- Footer year ---------- */
  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
})();
