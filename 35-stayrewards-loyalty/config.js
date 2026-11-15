/* ============================================================
   StayRewards  —  Hotel Loyalty Program
   ------------------------------------------------------------
   THIS FILE IS YOUR WEBSITE'S CONTENT.
   Everything you see on the page comes from here.

   To change a PHOTO   : replace the "image" link with your own.
                         Your own file? Drop it in the images/ folder
                         and write  "images/my-photo.jpg"
   To change TEXT      : edit the words inside the "quotes".
   To change PRICES    : edit the "price" numbers (digits only).
   To change COLOURS   : edit the "theme" block below.

   Prefer not to touch code? Open admin.html in your browser
   and edit everything through a form instead.

   Rules: keep the quotes, keep the commas, don't delete the braces.
   ============================================================ */

window.SITE_CONFIG = {
  "brand": {
    "name": "StayRewards",
    "logoSub": "Hotel Loyalty Program",
    "type": "Hotel Loyalty Program",
    "city": "Mumbai",
    "tagline": "Every Stay Earns. Every Point Counts.",
    "description": "Hotel loyalty programme platform. Earn points, unlock tiers, redeem rewards, and enjoy exclusive member benefits across partner hotels.",
    "phone": "+91 98765 43210",
    "whatsapp": "+919876543210",
    "email": "hello@stayrewards.com",
    "address": "12 Grand Avenue, Mumbai, India"
  },
  "theme": {
    "primary": "#e65100",
    "secondary": "#ffb300",
    "accent": "#ffecb3",
    "bg": "#fffdf4",
    "surface": "#ffffff",
    "text": "#8d3200"
  },
  "layout": {
    "archetype": "D",
    "hideQuickBar": true
  },
  "nav": [
    {
      "id": "rooms",
      "label": "Plans"
    },
    {
      "id": "features",
      "label": "Features"
    },
    {
      "id": "gallery",
      "label": "Gallery"
    },
    {
      "id": "reviews",
      "label": "Reviews"
    },
    {
      "id": "contact",
      "label": "Contact"
    }
  ],
  "filters": [
    {
      "id": "all",
      "label": "All Licences"
    },
    {
      "id": "under",
      "label": "Best Value"
    },
    {
      "id": "premium",
      "label": "Premium"
    },
    {
      "id": "family",
      "label": "Teams"
    },
    {
      "id": "faves",
      "label": "Saved"
    }
  ],
  "hero": {
    "slides": [
      {
        "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=80",
        "title": "Every Stay Earns. Every Point Counts.",
        "subtitle": "Hotel loyalty programme platform. Earn points, unlock tiers, redeem rewards, and enjoy exclusive member benefits across partner hotels."
      },
      {
        "image": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1800&q=80",
        "title": "Run Your Property, Not Your Spreadsheets",
        "subtitle": "Hotel Loyalty Program in Mumbai — every stay earns. every point counts.."
      },
      {
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=80",
        "title": "One Platform. Every Moving Part.",
        "subtitle": "Explore our licences and reserve in under a minute."
      }
    ]
  },
  "stats": [
    {
      "number": "1200+",
      "label": "Properties"
    },
    {
      "number": "48",
      "label": "Countries"
    },
    {
      "number": "99.9%",
      "label": "Uptime"
    },
    {
      "number": "4.8",
      "label": "G2 Rating"
    }
  ],
  "rooms": [
    {
      "id": "silver-member",
      "name": "Silver Member",
      "price": 0,
      "desc": "Earn one point per 100 rupees spent with core member perks",
      "size": "Tier 1",
      "capacity": 1,
      "beds": "Free to join",
      "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=78"
      ],
      "amenities": [
        "Unlimited bookings",
        "Channel sync",
        "Guest messaging",
        "Mobile app",
        "Email support"
      ]
    },
    {
      "id": "gold-member",
      "name": "Gold Member",
      "price": 2999,
      "desc": "Double points, room upgrades, and late checkout",
      "size": "Tier 2",
      "capacity": 2,
      "beds": "Annual",
      "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=78"
      ],
      "amenities": [
        "Mobile app",
        "Email support",
        "Custom reports",
        "API access",
        "Priority onboarding",
        "Role permissions",
        "Data export"
      ]
    },
    {
      "id": "platinum-member",
      "name": "Platinum Member",
      "price": 7999,
      "desc": "Triple points, free nights, and lounge access",
      "size": "Tier 3",
      "capacity": 4,
      "beds": "Annual",
      "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=78"
      ],
      "amenities": [
        "API access",
        "Priority onboarding",
        "Role permissions",
        "Data export",
        "Audit log",
        "SLA guarantee"
      ]
    },
    {
      "id": "diamond-member",
      "name": "Diamond Member",
      "price": 19999,
      "desc": "Five times points, personal concierge, guaranteed availability",
      "size": "Tier 4",
      "capacity": 6,
      "beds": "Annual",
      "image": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=78"
      ],
      "amenities": [
        "Data export",
        "Audit log",
        "SLA guarantee"
      ]
    }
  ],
  "features": [
    {
      "icon": "✦",
      "title": "Points System",
      "desc": "Points System, included on every plan from day one."
    },
    {
      "icon": "◆",
      "title": "Tier Rewards",
      "desc": "Tier Rewards, included on every plan from day one."
    },
    {
      "icon": "★",
      "title": "Free Night Redemption",
      "desc": "Free Night Redemption, included on every plan from day one."
    },
    {
      "icon": "◈",
      "title": "Partner Hotels",
      "desc": "Partner Hotels, included on every plan from day one."
    },
    {
      "icon": "❖",
      "title": "Mobile App",
      "desc": "Mobile App, included on every plan from day one."
    },
    {
      "icon": "●",
      "title": "Exclusive Offers",
      "desc": "Exclusive Offers, included on every plan from day one."
    }
  ],
  "gallery": [
    {
      "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=74",
      "caption": "Dashboard"
    },
    {
      "image": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=900&q=74",
      "caption": "Bookings Grid"
    },
    {
      "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=74",
      "caption": "Rate Manager"
    },
    {
      "image": "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=900&q=74",
      "caption": "Housekeeping Board"
    },
    {
      "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=74",
      "caption": "Reports"
    },
    {
      "image": "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=74",
      "caption": "Mobile App"
    },
    {
      "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=74",
      "caption": "Guest Portal"
    },
    {
      "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=74",
      "caption": "Integrations"
    }
  ],
  "about": {
    "title": "About StayRewards",
    "paragraphs": [
      "StayRewards was built by people who ran hotels before they wrote software. Every screen started as a complaint on a real front desk.",
      "Today the platform powers properties from twelve-room guesthouses to three-hundred-key resorts across forty-eight countries, and the roadmap is still shaped by the operators who use it daily."
    ],
    "points": [
      "Built with hoteliers, not just for them",
      "Free migration from your current system",
      "No lock-in contracts, cancel any time",
      "Median support response under fifteen minutes"
    ],
    "images": [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=76",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=76"
    ]
  },
  "testimonials": [
    {
      "name": "Vikram Desai",
      "title": "GM, 140-room resort",
      "text": "We cut nightly reporting from two hours to about ten minutes. Onboarding took a week and the team actually uses it, which says more than any feature list.",
      "rating": 5
    },
    {
      "name": "Sneha Rao",
      "title": "Revenue Manager, hotel group",
      "text": "Rate parity issues across six OTAs used to be a daily fire. Now I get an alert before it becomes a problem. RevPAR is up eleven percent year on year.",
      "rating": 5
    },
    {
      "name": "Imran Qureshi",
      "title": "Owner, boutique chain",
      "text": "I evaluated four platforms. This was the only one where the mobile experience was as good as the desktop one — that mattered for my housekeeping team.",
      "rating": 5
    },
    {
      "name": "Kavya Pillai",
      "title": "Operations Head, 3 properties",
      "text": "Support answers in minutes, not days. The migration from our old system was handled entirely by their team, over a weekend, with zero downtime.",
      "rating": 4
    },
    {
      "name": "Rahul Bhatt",
      "title": "Director, resort group",
      "text": "The forecasting has been accurate enough that we now plan staffing around it. That alone paid for the subscription several times over.",
      "rating": 5
    }
  ],
  "faqs": [
    {
      "q": "How long does setup take?",
      "a": "Most single properties are live within five working days. Multi-property groups typically take two to three weeks including data migration, which our team handles for you."
    },
    {
      "q": "Can we migrate data from our current system?",
      "a": "Yes. We import reservations, guest profiles, rate plans, and historical reports from all major PMS and channel platforms at no extra cost."
    },
    {
      "q": "Is there a contract or lock-in?",
      "a": "No. Plans are billed monthly and you can cancel whenever you like. Annual billing is available at a discount if you prefer it."
    },
    {
      "q": "What does support look like?",
      "a": "Email and chat on every plan, with phone support and a named account manager on Enterprise. Median first response is under fifteen minutes during business hours."
    },
    {
      "q": "Does it integrate with our existing tools?",
      "a": "We ship connectors for the major OTAs, payment gateways, accounting suites, and door-lock systems, plus a documented REST API for anything custom."
    },
    {
      "q": "Is our guest data secure?",
      "a": "Data is encrypted in transit and at rest, hosted in regional data centres, and the platform is built to GDPR and PCI-DSS requirements."
    }
  ],
  "booking": {
    "currency": "₹",
    "taxRate": 0.18,
    "serviceFee": 0,
    "minNights": 1,
    "midPrice": 7999,
    "refPrefix": "STA"
  },
  "labels": {
    "cta": "Start Free Trial",
    "ctaShort": "Choose",
    "browse": "See Plans",
    "search": "Find Plan",
    "unit": "Plan",
    "unitPlural": "Licences",
    "per": "per month",
    "night": "month",
    "nights": "months",
    "checkIn": "Start Date",
    "checkOut": "Renewal Date",
    "guests": "Team Size",
    "roomsEyebrow": "Pricing",
    "roomsTitle": "Plans & Pricing",
    "roomsBlurb": "Transparent pricing that scales with your property portfolio. No setup fees, cancel anytime.",
    "featuresEyebrow": "Capabilities",
    "featuresTitle": "Everything You Need to Run Operations",
    "featuresBlurb": "A complete toolkit built with hoteliers, for hoteliers.",
    "galleryEyebrow": "Product",
    "galleryTitle": "Inside the Platform",
    "galleryBlurb": "A look at the dashboards and workflows your team will use every day.",
    "reviewsEyebrow": "Customers",
    "reviewsTitle": "Trusted by Hoteliers",
    "bookEyebrow": "Get Started",
    "bookTitle": "Request Your Demo",
    "bookBlurb": "Four quick steps and our team will reach out within one business day.",
    "faqEyebrow": "Questions",
    "faqTitle": "Frequently Asked Questions",
    "contactEyebrow": "Talk to Us",
    "contactTitle": "Contact Sales",
    "contactBlurb": "Prefer a conversation? Our specialists are ready to help.",
    "aboutEyebrow": "Our Story",
    "steps": [
      "Timeline",
      "Plan",
      "Details",
      "Review"
    ],
    "confirmCta": "Submit Request",
    "confirmTitle": "Request Received",
    "confirmBody": "Our solutions team will contact you shortly to schedule your personalised walkthrough.",
    "confirmToast": "Demo request submitted",
    "searchToast": "Showing matching plans",
    "newsTitle": "Product Updates",
    "newsBlurb": "Monthly release notes and hospitality-tech insights. No spam.",
    "newsToast": "Subscribed to updates",
    "included": "Included in this plan",
    "specSize": "Capacity",
    "specCap": "Seats",
    "specCapUnit": "users",
    "specBeds": "Support",
    "upTo": "up to",
    "demoNote": "This is a demonstration form. No payment is taken and no account is created.",
    "waText": "Hi, I would like a demo of StayRewards."
  },
  "social": {
    "facebook": "https://facebook.com/",
    "instagram": "https://instagram.com/",
    "twitter": "https://twitter.com/",
    "linkedin": "https://linkedin.com/"
  },
  "footerLinks": [
    {
      "title": "Explore",
      "links": [
        {
          "label": "Licences",
          "href": "#rooms"
        },
        {
          "label": "Features",
          "href": "#features"
        },
        {
          "label": "Gallery",
          "href": "#gallery"
        },
        {
          "label": "Reviews",
          "href": "#reviews"
        }
      ]
    },
    {
      "title": "Company",
      "links": [
        {
          "label": "About Us",
          "href": "#about"
        },
        {
          "label": "FAQs",
          "href": "#faq"
        },
        {
          "label": "Contact",
          "href": "#contact"
        },
        {
          "label": "Start Free Trial",
          "href": "#book"
        }
      ]
    }
  ]
};
