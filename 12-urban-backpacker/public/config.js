/* ============================================================
   Urban Backpacker  —  Hostel
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
    "name": "Urban Backpacker",
    "logoSub": "Hostel",
    "type": "Hostel",
    "city": "Bengaluru",
    "tagline": "Travel Smart. Stay Cool. Connect.",
    "description": "The modern hostel experience reimagined. Clean, social, affordable, and located in the heart of the city's culture district.",
    "phone": "+91 98765 43210",
    "whatsapp": "+919876543210",
    "email": "hello@urbanbackpacker.com",
    "address": "12 Grand Avenue, Bengaluru, India"
  },
  "theme": {
    "primary": "#1a1a2e",
    "secondary": "#ff6b35",
    "accent": "#ffc107",
    "bg": "#fffaf5",
    "surface": "#ffffff",
    "text": "#1a1a2e"
  },
  "layout": {
    "archetype": "H",
    "hideQuickBar": false
  },
  "nav": [
    {
      "id": "rooms",
      "label": "Rooms"
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
      "label": "All Rooms"
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
        "image": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1800&q=80",
        "title": "Travel Smart. Stay Cool. Connect.",
        "subtitle": "The modern hostel experience reimagined. Clean, social, affordable, and located in the heart of the city's culture district."
      },
      {
        "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80",
        "title": "Good Times, Great Rates, No Fuss",
        "subtitle": "Hostel in Bengaluru — travel smart. stay cool. connect.."
      },
      {
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=80",
        "title": "The Trip You'll Keep Talking About",
        "subtitle": "Explore our rooms and reserve in under a minute."
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
      "label": "Hostels"
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
      "id": "private-pod",
      "name": "Private Pod",
      "price": 1200,
      "desc": "Personal capsule with reading light, USB, and locker",
      "size": "4 m²",
      "capacity": 1,
      "beds": "1 Single Pod",
      "image": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=78"
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
      "id": "mixed-dorm-8-bed",
      "name": "Mixed Dorm (8-bed)",
      "price": 600,
      "desc": "Social dorm with privacy curtains and personal outlets",
      "size": "32 m²",
      "capacity": 1,
      "beds": "1 Bunk Bed",
      "image": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=78"
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
      "id": "female-dorm-6-bed",
      "name": "Female Dorm (6-bed)",
      "price": 700,
      "desc": "Women-only dorm with enhanced security and amenities",
      "size": "26 m²",
      "capacity": 1,
      "beds": "1 Bunk Bed",
      "image": "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=78"
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
      "id": "private-double",
      "name": "Private Double",
      "price": 2500,
      "desc": "Couples room with ensuite bathroom and city views",
      "size": "18 m²",
      "capacity": 2,
      "beds": "1 Double",
      "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=78"
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
      "title": "Co-Working Space",
      "desc": "Co-Working Space — part of what makes a stay here different."
    },
    {
      "icon": "◆",
      "title": "Rooftop Social Area",
      "desc": "Rooftop Social Area — part of what makes a stay here different."
    },
    {
      "icon": "★",
      "title": "Free Walking Tours",
      "desc": "Free Walking Tours — part of what makes a stay here different."
    },
    {
      "icon": "◈",
      "title": "Communal Kitchen",
      "desc": "Communal Kitchen — part of what makes a stay here different."
    },
    {
      "icon": "❖",
      "title": "Game Room",
      "desc": "Game Room — part of what makes a stay here different."
    },
    {
      "icon": "●",
      "title": "Live Music Nights",
      "desc": "Live Music Nights — part of what makes a stay here different."
    }
  ],
  "gallery": [
    {
      "image": "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=900&q=74",
      "caption": "Arrival"
    },
    {
      "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=74",
      "caption": "The Suites"
    },
    {
      "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=900&q=74",
      "caption": "Dining"
    },
    {
      "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=74",
      "caption": "The Pool"
    },
    {
      "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=74",
      "caption": "Evenings Here"
    },
    {
      "image": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=74",
      "caption": "Surroundings"
    },
    {
      "image": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=74",
      "caption": "The Spa"
    },
    {
      "image": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=74",
      "caption": "Details"
    }
  ],
  "about": {
    "title": "About Urban Backpacker",
    "paragraphs": [
      "Urban Backpacker began with a simple conviction: that hospitality is less about grandeur and more about attention. Everything here follows from that.",
      "Set in Bengaluru, the property pairs a strong sense of place with the comforts experienced travellers expect. Materials are local, the kitchen is seasonal, and the team has been with us for years.",
      "We keep the property deliberately small so that service stays personal. You are a name here, not a room number."
    ],
    "points": [
      "Recognised among the region's finest for eighteen consecutive years",
      "Ninety-four percent of guests say they would return",
      "Locally sourced kitchen with a seasonal menu",
      "Concierge available twenty-four hours a day"
    ],
    "images": [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=76",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=76"
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
      "q": "Is parking available at Urban Backpacker?",
      "a": "Complimentary on-site parking is available for all guests, with valet service during peak periods and charging points for electric vehicles."
    }
  ],
  "booking": {
    "currency": "₹",
    "taxRate": 0.18,
    "serviceFee": 500,
    "minNights": 1,
    "midPrice": 1200,
    "refPrefix": "URB"
  },
  "labels": {
    "cta": "Book Now",
    "ctaShort": "Book",
    "browse": "View Rooms",
    "search": "Check Availability",
    "unit": "Room",
    "unitPlural": "Rooms",
    "per": "per night",
    "night": "night",
    "nights": "nights",
    "checkIn": "Check In",
    "checkOut": "Check Out",
    "guests": "Guests",
    "roomsEyebrow": "Accommodation",
    "roomsTitle": "Rooms & Suites",
    "roomsBlurb": "Each space is designed around comfort, light, and the view beyond the window.",
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
      "Room",
      "Guest",
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
    "waText": "Hi, I'd like to enquire about a booking at Urban Backpacker."
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
          "label": "Rooms",
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
          "label": "Book Now",
          "href": "#book"
        }
      ]
    }
  ]
};
