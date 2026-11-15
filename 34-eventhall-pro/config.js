/* ============================================================
   EventHall Pro  —  Hotel Event Management
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
    "name": "EventHall Pro",
    "logoSub": "Hotel Event Management",
    "type": "Hotel Event Management",
    "city": "Jaipur",
    "tagline": "Magnificent Events, Flawless Execution",
    "description": "Hotel event management for weddings, conferences, and social celebrations. Venue booking, catering, decor, and full coordination.",
    "phone": "+91 98765 43210",
    "whatsapp": "+919876543210",
    "email": "hello@eventhallpro.com",
    "address": "12 Grand Avenue, Jaipur, India"
  },
  "theme": {
    "primary": "#4a148c",
    "secondary": "#7c4dff",
    "accent": "#d1c4e9",
    "bg": "#faf7ff",
    "surface": "#ffffff",
    "text": "#311b92"
  },
  "layout": {
    "archetype": "A",
    "hideQuickBar": false
  },
  "nav": [
    {
      "id": "rooms",
      "label": "Halls"
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
      "label": "All Halls"
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
        "image": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
        "title": "Magnificent Events, Flawless Execution",
        "subtitle": "Hotel event management for weddings, conferences, and social celebrations. Venue booking, catering, decor, and full coordination."
      },
      {
        "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=80",
        "title": "A Standard Set Long Ago, Kept Ever Since",
        "subtitle": "Hotel Event Management in Jaipur — magnificent events, flawless execution."
      },
      {
        "image": "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1800&q=80",
        "title": "Arrive as a Guest, Leave as a Regular",
        "subtitle": "Explore our halls and reserve in under a minute."
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
      "label": "Managements"
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
      "id": "grand-ballroom",
      "name": "Grand Ballroom",
      "price": 200000,
      "desc": "Five hundred guest capacity beneath crystal chandeliers",
      "size": "1200 m²",
      "capacity": 500,
      "beds": "Per day",
      "image": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=78"
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
      "id": "conference-center",
      "name": "Conference Center",
      "price": 75000,
      "desc": "Two hundred seat auditorium with full AV equipment",
      "size": "450 m²",
      "capacity": 200,
      "beds": "Per day",
      "image": "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=78"
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
      "id": "garden-pavilion",
      "name": "Garden Pavilion",
      "price": 150000,
      "desc": "Outdoor venue set within landscaped gardens",
      "size": "900 m²",
      "capacity": 300,
      "beds": "Per day",
      "image": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=78"
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
      "id": "board-room",
      "name": "Board Room",
      "price": 25000,
      "desc": "Executive meeting room for twenty with catering",
      "size": "70 m²",
      "capacity": 20,
      "beds": "Per day",
      "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=76",
      "gallery": [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=78",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=78"
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
      "title": "Venue Booking",
      "desc": "Venue Booking — part of what makes a stay here different."
    },
    {
      "icon": "◆",
      "title": "Catering Packages",
      "desc": "Catering Packages — part of what makes a stay here different."
    },
    {
      "icon": "★",
      "title": "Decor Services",
      "desc": "Decor Services — part of what makes a stay here different."
    },
    {
      "icon": "◈",
      "title": "Event Planning",
      "desc": "Event Planning — part of what makes a stay here different."
    },
    {
      "icon": "❖",
      "title": "AV Equipment",
      "desc": "AV Equipment — part of what makes a stay here different."
    },
    {
      "icon": "●",
      "title": "Valet Parking",
      "desc": "Valet Parking — part of what makes a stay here different."
    }
  ],
  "gallery": [
    {
      "image": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=74",
      "caption": "Arrival"
    },
    {
      "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=74",
      "caption": "The Suites"
    },
    {
      "image": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=74",
      "caption": "Dining"
    },
    {
      "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=74",
      "caption": "The Pool"
    },
    {
      "image": "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=74",
      "caption": "Evenings Here"
    },
    {
      "image": "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=74",
      "caption": "Surroundings"
    },
    {
      "image": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=74",
      "caption": "The Spa"
    },
    {
      "image": "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=74",
      "caption": "Details"
    }
  ],
  "about": {
    "title": "About EventHall Pro",
    "paragraphs": [
      "EventHall Pro began with a simple conviction: that hospitality is less about grandeur and more about attention. Everything here follows from that.",
      "Set in Jaipur, the property pairs a strong sense of place with the comforts experienced travellers expect. Materials are local, the kitchen is seasonal, and the team has been with us for years.",
      "We keep the property deliberately small so that service stays personal. You are a name here, not a room number."
    ],
    "points": [
      "Recognised among the region's finest for eighteen consecutive years",
      "Ninety-four percent of guests say they would return",
      "Locally sourced kitchen with a seasonal menu",
      "Concierge available twenty-four hours a day"
    ],
    "images": [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=76",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=76"
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
      "q": "Is parking available at EventHall Pro?",
      "a": "Complimentary on-site parking is available for all guests, with valet service during peak periods and charging points for electric vehicles."
    }
  ],
  "booking": {
    "currency": "₹",
    "taxRate": 0.18,
    "serviceFee": 500,
    "minNights": 1,
    "midPrice": 150000,
    "refPrefix": "EVE"
  },
  "labels": {
    "cta": "Plan Your Event",
    "ctaShort": "Enquire",
    "browse": "Explore Venues",
    "search": "Check Availability",
    "unit": "Venue",
    "unitPlural": "Halls",
    "per": "per day",
    "night": "night",
    "nights": "nights",
    "checkIn": "Check In",
    "checkOut": "Check Out",
    "guests": "Guests",
    "roomsEyebrow": "Spaces",
    "roomsTitle": "Our Venues",
    "roomsBlurb": "Grand halls, garden pavilions, and intimate boardrooms for every kind of gathering.",
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
      "Venue",
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
    "waText": "Hi, I'd like to enquire about a booking at EventHall Pro."
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
          "label": "Halls",
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
          "label": "Plan Your Event",
          "href": "#book"
        }
      ]
    }
  ]
};
