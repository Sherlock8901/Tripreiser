import a1 from "@/assets/trips/assam/a1.jpg";
import a2 from "@/assets/trips/assam/a2.jpg";
import a3 from "@/assets/trips/assam/a3.jpg";
import a4 from "@/assets/trips/assam/a4.jpg";

import m1 from "@/assets/trips/meghalaya/m1.jpeg";
import m2 from "@/assets/trips/meghalaya/m2.jpeg";
import m3 from "@/assets/trips/meghalaya/m3.jpeg";

// import s1 from "@/assets/trips/spiti/s1.png";
// import s2 from "@/assets/trips/spiti/s2.jpg";
// import s3 from "@/assets/trips/spiti/s3.jpg";

// import v1 from "@/assets/trips/varanasi/v1.jpg";
// import v2 from "@/assets/trips/varanasi/v2.jpg";
// import v3 from "@/assets/trips/varanasi/v3.jpg";

// import g1 from "@/assets/trips/gangtok/g1.jpg";
// import g2 from "@/assets/trips/gangtok/g2.jpg";
// import g3 from "@/assets/trips/gangtok/g3.jpg";

// import l1 from "@/assets/trips/ladakh/l1.jpg";
// import l2 from "@/assets/trips/ladakh/l2.jpg";
// import l3 from "@/assets/trips/ladakh/l3.jpg";

export interface DayPlan {
  title: string;
  description: string;
  highlights?: string[];
  stayImages?: string[];
}

export interface Media {
  type: "image" | "video";
  url: string;
  user: string;
}

export interface Plan {
  name: string;
  price: string;
  itinerary: DayPlan[];
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
}

export interface Trip {
  title: string;
  duration: string;
  heroVideo?: string;
  hero: string;
  gallery: string[];
  reviews?: Review[];
  userMedia?: Media[];
  plans: {
    explorer: Plan;
    elite: Plan;
    [key: string]: Plan;
  };
}


// ================= DATA =================

export const tripData: Record<string, Trip> = {
  assam: {
    title: "Assam Nature & Culture Escape",
    duration: "5 Days",
    hero: a1,
    heroVideo: "/videos/hero.mp4",
    gallery: [a2, a3, a4],


    userMedia: [
  {
    type: "image",
    url: a2,
    user: "Rahul",
  },
  {
    type: "video",
    url: "",
    user: "Priya",
  },
],

    // ✅ Reviews added correctly
    reviews: [
      {
        name: "Rahul",
        rating: 5,
        comment: "Amazing experience! Kaziranga safari was unforgettable.",
      },
      {
        name: "Priya",
        rating: 4,
        comment: "Very well organized trip. Loved Majuli island.",
      },
      {
        name: "Amit",
        rating: 5,
        comment: "Great service and smooth journey.",
      },
    ],

    plans: {
      explorer: {
        name: "Explorer Plan",
        price: "₹11,999",

        itinerary: [
          {
            title: "Day 1: Arrival in Guwahati",
            description: "Transfer to Kaziranga and relax.",
            highlights: ["Scenic drive", "Local exploration"],
            stayImages: [a1],
          },
          {
            title: "Day 2: Kaziranga Safari",
            description: "Jeep safari in Kaziranga National Park.",
            highlights: ["Wildlife", "Photography"],
            stayImages: [a2, a3],
          },
          {
            title: "Day 3: Majuli Island",
            description: "Visit Majuli Island and explore culture.",
            highlights: ["Satras", "Local traditions"],
            stayImages: [a3],
          },
          {
            title: "Day 4: Guwahati",
            description: "Visit Kamakhya Temple.",
            highlights: ["Temple visit", "City exploration"],
            stayImages: [a4],
          },
          {
            title: "Day 5: Departure",
            description: "Return journey.",
            highlights: ["Relax"],
            stayImages: [],
          },
        ],
      },

      elite: {
        name: "Elite Experience",
        price: "₹21,999",

        itinerary: [
          {
            title: "Day 1: Luxury Arrival",
            description: "Private transfer and luxury stay.",
            highlights: ["Premium hotel", "Comfort"],
            stayImages: [a1],
          },
          {
            title: "Day 2: Exclusive Safari",
            description: "Private safari experience.",
            highlights: ["VIP safari", "Guide"],
            stayImages: [a2],
          },
          {
            title: "Day 3: Premium Majuli Tour",
            description: "Curated cultural experience.",
            highlights: ["Local culture", "Premium guide"],
            stayImages: [a3],
          },
          {
            title: "Day 4: Private Temple Visit",
            description: "Exclusive Kamakhya visit.",
            highlights: ["VIP darshan"],
            stayImages: [a4],
          },
          {
            title: "Day 5: Departure",
            description: "Breakfast and return.",
            highlights: ["Comfort exit"],
            stayImages: [],
          },
        ],
      },
    },
  },

meghalaya: {
  title: "Meghalaya Waterfalls Adventure",
  duration: "6 Days",
  hero: m2,
  gallery: [m1, m2, m3],

  plans: {
    explorer: {
      name: "Explorer Plan",
      price: "₹18,499",

      itinerary: [
        {
          title: "Day 1: Guwahati → Shillong",
          description: "Arrival in Guwahati and scenic drive to Shillong. Check-in and local exploration.",
          highlights: ["Umiam Lake", "Shillong market", "Hill views"],
          stayImages: [m1],
        },
        {
          title: "Day 2: Cherrapunji Waterfalls",
          description: "Full-day excursion to Cherrapunji covering major waterfalls and viewpoints.",
          highlights: ["Nohkalikai Falls", "Seven Sisters Falls", "Mawsmai Cave"],
          stayImages: [m2],
        },
        {
          title: "Day 3: Living Root Bridge Trek",
          description: "Trek to the famous double-decker living root bridge in Nongriat village.",
          highlights: ["Trekking", "Natural bridges", "Village experience"],
          stayImages: [m3],
        },
        {
          title: "Day 4: Dawki & Umngot River",
          description: "Visit Dawki and enjoy crystal-clear boating in Umngot River.",
          highlights: ["Boat ride", "India-Bangladesh border", "Clear water river"],
          stayImages: [m1, m2],
        },
        {
          title: "Day 5: Mawlynnong Village",
          description: "Explore Asia’s cleanest village and nearby bamboo sky walk.",
          highlights: ["Clean village", "Sky walk", "Local culture"],
          stayImages: [m3],
        },
        {
          title: "Day 6: Return",
          description: "Return to Guwahati and departure.",
          highlights: ["Relaxed morning", "Scenic drive"],
          stayImages: [],
        },
      ],
    },

    elite: {
      name: "Elite Experience",
      price: "₹28,999",

      itinerary: [
        {
          title: "Day 1: Luxury Arrival",
          description: "Private transfer from Guwahati to Shillong with premium hotel stay.",
          highlights: ["Private cab", "Luxury hotel", "Welcome dinner"],
          stayImages: [m1],
        },
        {
          title: "Day 2: Premium Cherrapunji Tour",
          description: "Guided premium tour covering waterfalls and caves with comfort travel.",
          highlights: ["VIP access", "Guide included", "Comfort travel"],
          stayImages: [m2],
        },
        {
          title: "Day 3: Guided Root Bridge Trek",
          description: "Expert-guided trek to living root bridges with safety support.",
          highlights: ["Guide support", "Safe trekking", "Photography spots"],
          stayImages: [m3],
        },
        {
          title: "Day 4: Private Dawki Experience",
          description: "Private boat ride in Umngot River and exclusive riverside time.",
          highlights: ["Private boat", "Crystal water", "Premium experience"],
          stayImages: [m1, m2],
        },
        {
          title: "Day 5: Cultural Village Experience",
          description: "Explore Mawlynnong with curated cultural activities.",
          highlights: ["Local interaction", "Cultural insights", "Premium walk"],
          stayImages: [m3],
        },
        {
          title: "Day 6: Departure",
          description: "Comfortable return to Guwahati with breakfast.",
          highlights: ["Smooth checkout", "Private drop"],
          stayImages: [],
        },
      ],
    },
  },
},

//   spiti: {
//     title: "Spiti Valley Bike Expedition",
//     duration: "8 Days",
//     hero: s1,
//     gallery: [s1, s2, s3],
//     plans: {
//       explorer: {
//         name: "Explorer Plan",
//         price: "₹22,999",
//         itinerary: [
//           "Day 1: Manali arrival",
//           "Day 2: Manali → Kaza ride",
//           "Day 3: Key monastery & Kibber",
//           "Day 4: Hikkim & Langza",
//           "Day 5: Chandratal lake",
//           "Day 6: Pin Valley",
//           "Day 7: Return ride",
//           "Day 8: Departure",
//         ],
//       },
//       elite: {
//         name: "Elite Experience",
//         price: "₹39,999",
//         itinerary: [
//           "Day 1: Luxury transfer → Manali",
//           "Day 2: Premium ride to Kaza",
//           "Day 3: Private Spiti sightseeing",
//           "Day 4: Hikkim Komik Langza",
//           "Day 5: Guided Pin Valley",
//           "Day 6: Luxury camps at Chandratal",
//           "Day 7: Return to Manali",
//           "Day 8: Departure",
//         ],
//       },
//     },
//   },

//   varanasi: {
//     title: "Dev Diwali Varanasi Experience",
//     duration: "4 Days",
//     hero: v1,
//     gallery: [v1, v2, v3],
//     plans: {
//       explorer: {
//         name: "Explorer Plan",
//         price: "₹9,999",
//         itinerary: [
//           "Day 1: Arrival in Varanasi",
//           "Day 2: Sunrise boat ride",
//           "Day 3: Dev Diwali celebration",
//           "Day 4: Sarnath visit & departure",
//         ],
//       },
//       elite: {
//         name: "Elite Experience",
//         price: "₹15,999",
//         itinerary: [
//           "Day 1: Luxury hotel check-in",
//           "Day 2: Private sunrise boat ride",
//           "Day 3: VIP Ganga Aarti + Dev Diwali",
//           "Day 4: Guided Sarnath tour",
//         ],
//       },
//     },
//   },

//   gangtok: {
//     title: "Gangtok Bike Trip",
//     duration: "7 Days",
//     hero: g1,
//     gallery: [g1, g2, g3],
//     plans: {
//       explorer: {
//         name: "Explorer Plan",
//         price: "₹19,999",
//         itinerary: [
//           "Day 1: Arrival Siliguri",
//           "Day 2: Ride to Gangtok",
//           "Day 3: Tsomgo lake",
//           "Day 4: Nathula pass",
//           "Day 5: North Sikkim",
//           "Day 6: Return ride",
//           "Day 7: Departure",
//         ],
//       },
//       elite: {
//         name: "Elite Experience",
//         price: "₹29,999",
//         itinerary: [
//           "Day 1: Premium transfer to Gangtok",
//           "Day 2: Luxury stay",
//           "Day 3: Private Tsomgo tour",
//           "Day 4: Nathula VIP permit",
//           "Day 5: North Sikkim luxury stay",
//           "Day 6: Return ride",
//           "Day 7: Departure",
//         ],
//       },
//     },
//   },

//   ladakh: {
//     title: "Ladakh Adventure Expedition",
//     duration: "8 Days",
//     hero: l1,
//     gallery: [l1, l2, l3],
//     plans: {
//       explorer: {
//         name: "Explorer Plan",
//         price: "₹24,999",
//         itinerary: [
//           "Day 1: Leh arrival",
//           "Day 2: Leh sightseeing",
//           "Day 3: Nubra valley",
//           "Day 4: Diskit monastery",
//           "Day 5: Pangong lake",
//           "Day 6: Return Leh",
//           "Day 7: Monasteries",
//           "Day 8: Departure",
//         ],
//       },
//       elite: {
//         name: "Elite Experience",
//         price: "₹42,999",
//         itinerary: [
//           "Day 1: Luxury hotel Leh",
//           "Day 2: Private sightseeing",
//           "Day 3: Nubra premium camp",
//           "Day 4: Private monastery tour",
//           "Day 5: Pangong luxury camp",
//           "Day 6: Return Leh",
//           "Day 7: Cultural experience",
//           "Day 8: Departure",
//         ],
//       },
//     },
//   },
};