/* ============================================================
   Wanderlust Travels  —  Travel Agency
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
    "name": "Wanderlust Travels",
    "logoSub": "Travel Agency",
    "type": "Travel Agency",
    "city": "Mumbai",
    "tagline": "Your Journey Begins with a Dream",
    "description": "Full-service travel agency specialising in hotel bookings, vacation packages, and curated travel experiences worldwide.",
    "phone": "+91 98765 43210",
    "whatsapp": "+919876543210",
    "email": "hello@wanderlusttravels.com",
    "address": "12 Grand Avenue, Mumbai, India"
  },
  "theme": {
    "primary": "#1e3a5f",
    "secondary": "#f4845f",
    "accent": "#f7d6be",
    "bg": "#fff7f2",
    "surface": "#ffffff",
    "text": "#1e3a5f"
  },
  "layout": {
    "archetype": "E",
    "hideQuickBar": false
  },
  "nav": [
    {
      "id": "rooms",
      "label": "Travellers"
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
      "label": "All Travellers"
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
      "label": "Large Groups"
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
        "title": "Your Journey Begins with a Dream",
        "subtitle": "Full-service travel agency specialising in hotel bookings, vacation packages, and curated travel experiences worldwide."
      },
      {
        "image": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1800&q=80",
        "title": "Sunshine Has an Address",
        "subtitle": "Travel Agency in Mumbai — your journey begins with a dream."
      },
      {
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=80",
        "title": "Barefoot Luxury, Properly Done",
        "subtitle": "Explore our travellers and reserve in under a minute."
      }
    ]
  },
  "stats": [
    {
      "number": "12500+",
      "label": "Happy Guests"
    },
    {
      "number": "36",
      "label": "Agencys"
    },
    {
      "number": "18",
      "label": "Years of Service"
    },
    {
      "number": "4.9",
      "label": "Guest Rating"
    }
  ],
  "rooms": [
    {
      "id": "weekend-getaway",
      "name": "Weekend Getaway",
      "price": 15000,
      "desc": "Two-night hotel stay with activities in nearby destinations",
      "size": "2 nights",
      "capacity": 2,
      "beds": "Per couple",
      "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=78"
      ],
      "amenities": [
        "Free WiFi",
        "Air Conditioning",
        "Smart TV",
        "Mini Bar",
        "Safe"
      ]
    },
    {
      "id": "honeymoon-package",
      "name": "Honeymoon Package",
      "price": 75000,
      "desc": "Seven-night romantic escape with flights and transfers",
      "size": "7 nights",
      "capacity": 2,
      "beds": "Per couple",
      "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=78"
      ],
      "amenities": [
        "Mini Bar",
        "Safe",
        "Room Service",
        "Rain Shower",
        "Premium Linen",
        "Tea & Coffee",
        "Work Desk"
      ]
    },
    {
      "id": "family-vacation",
      "name": "Family Vacation",
      "price": 50000,
      "desc": "Five-night family adventure with child-friendly activities",
      "size": "5 nights",
      "capacity": 4,
      "beds": "Per family",
      "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=78"
      ],
      "amenities": [
        "Rain Shower",
        "Premium Linen",
        "Tea & Coffee",
        "Work Desk",
        "Blackout Curtains",
        "Daily Housekeeping"
      ]
    },
    {
      "id": "luxury-escape",
      "name": "Luxury Escape",
      "price": 200000,
      "desc": "Premium ten-night journey with five-star stays throughout",
      "size": "10 nights",
      "capacity": 2,
      "beds": "Per couple",
      "image": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=78"
      ],
      "amenities": [
        "Work Desk",
        "Blackout Curtains",
        "Daily Housekeeping"
      ]
    }
  ],
  "features": [
    {
      "icon": "✦",
      "title": "Hotel Booking",
      "desc": "Hotel Booking — part of what makes a stay here different."
    },
    {
      "icon": "◆",
      "title": "Flight Packages",
      "desc": "Flight Packages — part of what makes a stay here different."
    },
    {
      "icon": "★",
      "title": "Visa Assistance",
      "desc": "Visa Assistance — part of what makes a stay here different."
    },
    {
      "icon": "◈",
      "title": "Travel Insurance",
      "desc": "Travel Insurance — part of what makes a stay here different."
    },
    {
      "icon": "❖",
      "title": "24/7 Support",
      "desc": "24/7 Support — part of what makes a stay here different."
    },
    {
      "icon": "●",
      "title": "Custom Itineraries",
      "desc": "Custom Itineraries — part of what makes a stay here different."
    }
  ],
  "gallery": [
    {
      "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=74",
      "caption": "Arrival"
    },
    {
      "image": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=900&q=74",
      "caption": "The Suites"
    },
    {
      "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=74",
      "caption": "Dining"
    },
    {
      "image": "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=900&q=74",
      "caption": "The Pool"
    },
    {
      "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=74",
      "caption": "Evenings Here"
    },
    {
      "image": "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=74",
      "caption": "Surroundings"
    },
    {
      "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=74",
      "caption": "The Spa"
    },
    {
      "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=74",
      "caption": "Details"
    }
  ],
  "about": {
    "title": "About Wanderlust Travels",
    "paragraphs": [
      "Wanderlust Travels began with a simple conviction: that hospitality is less about grandeur and more about attention. Everything here follows from that.",
      "Set in Mumbai, the property pairs a strong sense of place with the comforts experienced travellers expect. Materials are local, the kitchen is seasonal, and the team has been with us for years.",
      "We keep the property deliberately small so that service stays personal. You are a name here, not a room number."
    ],
    "points": [
      "Recognised among the region's finest for eighteen consecutive years",
      "Ninety-four percent of guests say they would return",
      "Locally sourced kitchen with a seasonal menu",
      "Concierge available twenty-four hours a day"
    ],
    "images": [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=76",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=76"
    ]
  },
  "testimonials": [
    {
      "name": "Ananya Sharma",
      "title": "Travel Writer, Mumbai",
      "text": "Every detail had clearly been thought about twice. The staff remembered my coffee order by the second morning, and the view from the terrace at sunrise is something I still think about.",
      "rating": 5
    },
    {
      "name": "Rohit Menon",
      "title": "Founder, Bengaluru",
      "text": "I booked for two nights and extended to five. Fast wifi, genuinely quiet rooms, and the kind of service that anticipates rather than reacts. Rare combination.",
      "rating": 5
    },
    {
      "name": "Priya Nair",
      "title": "Architect, Kochi",
      "text": "The design alone is worth the trip — proportion, materials, light, all handled with real restraint. And the food more than keeps up with the setting.",
      "rating": 5
    },
    {
      "name": "Arjun Kapoor",
      "title": "Photographer, Delhi",
      "text": "Shot here for three days and never ran out of frames. Beyond the aesthetics, the team made complicated requests feel effortless.",
      "rating": 4
    },
    {
      "name": "Meera Iyer",
      "title": "Consultant, Chennai",
      "text": "Booking was simple, check-in took two minutes, and the room was exactly what the photos promised. No surprises, which is the highest compliment I can give.",
      "rating": 5
    }
  ],
  "faqs": [
    {
      "q": "What are the check-in and check-out times?",
      "a": "Check-in opens at 2:00 PM and check-out is 11:00 AM. Early arrival and late departure can usually be arranged — just mention it when you book and we will do our best."
    },
    {
      "q": "Is breakfast included in the rate?",
      "a": "Breakfast is included on most rates. Your booking summary shows exactly what is covered before you confirm, so there are no surprises at the desk."
    },
    {
      "q": "What is the cancellation policy?",
      "a": "Free cancellation up to 48 hours before arrival on flexible rates. Discounted advance-purchase rates are non-refundable, and this is always stated clearly at the time of booking."
    },
    {
      "q": "Do you arrange airport transfers?",
      "a": "Yes. Private transfers can be booked in advance or on request at the desk. Share your flight details and we will track the arrival time for you."
    },
    {
      "q": "Are children welcome?",
      "a": "Children of all ages are welcome unless the property is marked adults-only. Extra beds and cots are available, and under-sixes stay free when sharing with parents."
    },
    {
      "q": "Is parking available at Wanderlust Travels?",
      "a": "Complimentary on-site parking is available for all guests, with valet service during peak periods and charging points for electric vehicles."
    }
  ],
  "booking": {
    "currency": "₹",
    "taxRate": 0.18,
    "serviceFee": 500,
    "minNights": 1,
    "midPrice": 75000,
    "refPrefix": "WAN"
  },
  "labels": {
    "cta": "Book Journey",
    "ctaShort": "Select",
    "browse": "Browse Trips",
    "search": "Check Availability",
    "unit": "Package",
    "unitPlural": "Travellers",
    "per": "per package",
    "night": "night",
    "nights": "nights",
    "checkIn": "Check In",
    "checkOut": "Check Out",
    "guests": "Guests",
    "roomsEyebrow": "Journeys",
    "roomsTitle": "Travel Packages",
    "roomsBlurb": "Hand-picked itineraries with flights, stays, and experiences bundled together.",
    "featuresEyebrow": "Amenities",
    "featuresTitle": "Thoughtful Touches, Everywhere",
    "featuresBlurb": "The details that turn a stay into a memory.",
    "galleryEyebrow": "Gallery",
    "galleryTitle": "A Glimpse Inside",
    "galleryBlurb": "Spaces, flavours, and moments captured around the property.",
    "reviewsEyebrow": "Guest Stories",
    "reviewsTitle": "What Our Guests Say",
    "bookEyebrow": "Reservations",
    "bookTitle": "Reserve Your Stay",
    "bookBlurb": "Four short steps. Instant confirmation, no card required.",
    "faqEyebrow": "Good to Know",
    "faqTitle": "Frequently Asked Questions",
    "contactEyebrow": "Get in Touch",
    "contactTitle": "We're Here to Help",
    "contactBlurb": "Call, write, or simply drop by. Our team answers around the clock.",
    "aboutEyebrow": "Our Story",
    "steps": [
      "Dates",
      "Package",
      "Details",
      "Review"
    ],
    "confirmCta": "Confirm Booking",
    "confirmTitle": "Booking Confirmed",
    "confirmBody": "A confirmation email is on its way. We look forward to welcoming you.",
    "confirmToast": "Booking confirmed",
    "searchToast": "Showing available options",
    "newsTitle": "Join Our List",
    "newsBlurb": "Seasonal offers and quiet-season rates, straight to your inbox.",
    "newsToast": "You're on the list",
    "included": "What's included",
    "specSize": "Size",
    "specCap": "Sleeps",
    "specCapUnit": "guests",
    "specBeds": "Bedding",
    "upTo": "up to",
    "demoNote": "This is a demonstration booking form. No payment is taken at this step.",
    "waText": "Hi, I'd like to enquire about a booking at Wanderlust Travels."
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
          "label": "Travellers",
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
          "label": "Book Journey",
          "href": "#book"
        }
      ]
    }
  ]
};
