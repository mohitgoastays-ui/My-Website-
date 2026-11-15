# Royal Heritage Inn

Live the Legacy of Maharajas

A complete, self-contained Heritage Hotel website. No build step, no install, no server.

## Open it

Double-click **index.html**. That's the whole setup.

## Change the content

| I want to change... | Do this |
|---|---|
| Any text, price, or photo | Open **admin.html** in your browser, edit the form, click *Download config.js*, and drop that file back into this folder (replacing the old one) |
| The same thing, by hand | Open **config.js** in Notepad or VS Code and edit the values directly |
| Colours | `theme` block in **config.js**, or the Colours panel in admin.html |
| Layout, spacing, fonts | **styles.css** |
| How the page behaves | **index.html** (the React app lives at the bottom) |

### Using your own photos

1. Put your image files into the **images/** folder in this site.
2. In **config.js** (or admin.html), set the image to `images/your-file.jpg`.

Photos currently point at Unsplash links so the site looks finished out of the box.
If a link ever fails, the page shows a coloured placeholder instead of breaking.

## What's included

- Auto-rotating hero with 3 slides
- Live availability search bar
- Animated statistics counters
- 4 room cards with filtering, sorting, and save-to-favourites
- Detail modal with photo gallery per room
- Full-screen photo gallery with keyboard-navigable lightbox
- Rotating guest reviews
- 4-step booking engine with date validation, live price calculation (tax + fees) and a booking reference saved to your browser
- FAQ accordion
- Contact cards, newsletter signup, WhatsApp button, back-to-top
- Scroll-reveal animations, scroll progress bar, toast notifications
- Fully responsive: phone, tablet, desktop
- Respects `prefers-reduced-motion`

## Files

```
06-royal-heritage-inn/
├─ index.html    the website
├─ admin.html    visual content editor
├─ config.js     all your content  <-- edit this
├─ styles.css    the design
├─ images/       put your own photos here
└─ README.md     this file
```

## Going live

Upload the whole folder to any static host — Netlify, Vercel, GitHub Pages,
Cloudflare Pages, or plain shared hosting. No configuration needed.
