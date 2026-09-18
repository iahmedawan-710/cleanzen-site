import {
  Sparkles,
  Home,
  Truck,
  Building2,
  Star,
  Shield,
  BadgeCheck,
  Heart,
  Wrench,
  Refrigerator,
  Microwave,
  Archive,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "Cleanzen Boston Cleaning Services",
  shortName: "Cleanzen Boston",
  phone: "+1 617-701-7198",
  phoneHref: "tel:+16177017198",
  email: "hello@cleanzenboston.com",
  address: "30 Newbury St, Boston, MA 02116",
  addressShort: "30 Newbury St, Boston, MA 02116",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=30+Newbury+St+Boston+MA+02116",
  hours: "Mon–Sat: 7am – 8pm",
  rating: 4.9,
  reviewCount: 417,
};

export type Frequency = "one-time" | "weekly" | "bi-weekly" | "monthly";

export const FREQUENCIES: {
  id: Frequency;
  label: string;
  discount: number;
}[] = [
  { id: "one-time", label: "One-Time", discount: 0 },
  { id: "weekly", label: "Weekly", discount: 0.2 },
  { id: "bi-weekly", label: "Bi-Weekly", discount: 0.15 },
  { id: "monthly", label: "Monthly", discount: 0.1 },
];

export const ADD_ONS: {
  id: string;
  label: string;
  price: number;
  icon: LucideIcon;
}[] = [
  { id: "oven", label: "Inside Oven", price: 35, icon: Microwave },
  { id: "fridge", label: "Inside Fridge", price: 35, icon: Refrigerator },
  { id: "windows", label: "Inside Windows", price: 45, icon: Wrench },
  { id: "cabinets", label: "Cabinet Cleaning", price: 40, icon: Archive },
];

export const SERVICE_TYPES: {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  basePrice: number;
  popular?: boolean;
  image: string;
}[] = [
  {
    id: "standard",
    name: "Standard Home Cleaning",
    icon: Home,
    description:
      "Regular upkeep to keep your Boston home spotless and fresh week after week.",
    features: ["Dusting & wiping", "Mopping floors", "Trash removal", "Bathroom sanitize"],
    basePrice: 120,
    image:
      "https://images.pexels.com/photos/6523300/pexels-photo-6523300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "deep",
    name: "Deep Cleaning",
    icon: Sparkles,
    description:
      "A thorough top-to-bottom clean that eradicates 99.9% of bacteria from every surface.",
    features: ["Baseboards scrubbed", "Sanitization protocol", "Grout scrubbing", "Detailed dusting"],
    basePrice: 220,
    popular: true,
    image:
      "https://images.pexels.com/photos/6920448/pexels-photo-6920448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "move",
    name: "Move-In / Move-Out",
    icon: Truck,
    description:
      "Make a fresh start in your new Boston home or leave your old place spotless.",
    features: ["Full deep clean", "Appliance interiors", "Cabinet interiors", "Wall spot-clean"],
    basePrice: 280,
    image:
      "https://images.pexels.com/photos/7546566/pexels-photo-7546566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "apartment",
    name: "Apartment & Condo Cleaning",
    icon: Building2,
    description:
      "Specialized for Boston's urban spaces — from Back Bay brownstones to Seaport high-rises.",
    features: ["Compact-space experts", "Hard floor care", "Kitchen deep clean", "Common area tidy"],
    basePrice: 110,
    image:
      "https://images.pexels.com/photos/7533848/pexels-photo-7533848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export const TRUST_BADGES = {
  rating: 4.9,
  reviewCount: 417,
  items: [
    { icon: Star, label: "Google 4.9 Stars", sub: "417+ verified reviews" },
    { icon: ShieldCheck, label: "100% Germ-Free Standard", sub: "99.9% bacteria eradicated" },
    { icon: BadgeCheck, label: "Insured & Bonded", sub: "Background-checked pros" },
    { icon: Heart, label: "LGBTQ+ Friendly", sub: "Fully insured business" },
  ],
};

export const NEIGHBORHOODS = [
  "Back Bay",
  "Beacon Hill",
  "South End",
  "Fenway",
  "Brookline",
  "Cambridge",
  "Somerville",
  "Seaport",
];

export const REVIEWS = [
  {
    name: "Sarah Mitchell",
    location: "Back Bay, Boston",
    rating: 5,
    text: "The place was completely transformed after they finished. I booked a deep clean before hosting family and every corner was spotless — even the grout in my bathroom looks new. Best cleaning service in Boston, hands down.",
    avatar:
      "https://images.pexels.com/photos/7562179/pexels-photo-7562179.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    verified: true,
  },
  {
    name: "James Patterson",
    location: "Beacon Hill, Boston",
    rating: 5,
    text: "Professionals who always work efficiently. I've used Cleanzen Boston for bi-weekly cleans for six months now and they never disappoint. Punctual, thorough, and the online booking is incredibly easy.",
    avatar:
      "https://images.pexels.com/photos/5334146/pexels-photo-5334146.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    verified: true,
  },
  {
    name: "Emily Chen",
    location: "Seaport, Boston",
    rating: 5,
    text: "I live in a small Seaport condo and was worried about finding a service that understood compact urban spaces. Their apartment cleaning team was perfect — they knew exactly how to maximize every inch. My kitchen counters have never felt cleaner.",
    avatar:
      "https://images.pexels.com/photos/12895422/pexels-photo-12895422.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    verified: true,
  },
  {
    name: "Michael Rodriguez",
    location: "Brookline, MA",
    rating: 5,
    text: "Used them for a move-out clean on my Brookline apartment and got my full deposit back. The landlord was actually impressed. Fast, reliable, and the price was exactly what the estimator quoted. Highly recommend to anyone in the Boston area.",
    avatar:
      "https://images.pexels.com/photos/7562185/pexels-photo-7562185.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    verified: true,
  },
  {
    name: "Jessica Thompson",
    location: "Fenway, Boston",
    rating: 5,
    text: "As a busy medical resident at Mass General, I don't have time to clean. Cleanzen Boston has been a lifesaver. Their team is respectful, thorough, and always leaves my Fenway apartment sparkling. The 4.9-star rating is well deserved.",
    avatar:
      "https://images.pexels.com/photos/36291553/pexels-photo-36291553.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    verified: true,
  },
];

export const BEFORE_AFTER_IMAGES = [
  {
    label: "Kitchen Transformation",
    before:
      "https://images.pexels.com/photos/3787027/pexels-photo-3787027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    after:
      "https://images.pexels.com/photos/6523300/pexels-photo-6523300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    label: "Living Room Transformation",
    before:
      "https://images.pexels.com/photos/5317149/pexels-photo-5317149.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    after:
      "https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export const SERVICE_CHECKLISTS: {
  type: string;
  name: string;
  icon: LucideIcon;
  description: string;
  image: string;
  checklist: { category: string; items: string[] }[];
}[] = [
  {
    type: "apartment",
    name: "Apartment & Condo Cleaning",
    icon: Building2,
    description: "Specialized cleaning for Boston's unique urban living spaces, from compact studios to multi-bedroom condos.",
    image:
      "https://images.pexels.com/photos/7533848/pexels-photo-7533848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    checklist: [
      {
        category: "All Rooms",
        items: ["Dust all surfaces & fixtures", "Vacuum carpets & rugs", "Mop hard floors", "Empty all trash bins", "Wipe down baseboards", "Clean light switches & doorknobs"],
      },
      {
        category: "Kitchen",
        items: ["Wipe countertops & backsplash", "Clean sink & faucet", "Wipe appliance exteriors", "Clean stovetop", "Sanitize food prep areas"],
      },
      {
        category: "Bathrooms",
        items: ["Scrub toilet inside & out", "Clean shower & tub", "Wipe mirrors & vanity", "Sanitize sinks", "Restock towels if requested"],
      },
    ],
  },
  {
    type: "deep",
    name: "Deep Cleaning & Sanitization",
    icon: Sparkles,
    description: "A comprehensive top-to-bottom clean with our germ-free sanitization protocol that eradicates 99.9% of bacteria.",
    image:
      "https://images.pexels.com/photos/6920448/pexels-photo-6920448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    checklist: [
      {
        category: "Everything in Standard, Plus:",
        items: ["Scrub all baseboards", "Sanitize all high-touch surfaces", "Deep scrub tile grout", "Dust ceiling fans & vents", "Wipe window sills & frames", "Detail-clean light fixtures"],
      },
      {
        category: "Kitchen Deep Clean",
        items: ["Degrease stovetop & hood", "Sanitize countertops (99.9% bacteria-free)", "Deep clean sink & disposal", "Wipe inside microwave", "Polish stainless steel"],
      },
      {
        category: "Bathroom Deep Clean",
        items: ["Deep scrub shower grout", "Remove hard water stains", "Detail-clean vanity & drawers", "Sanitize behind toilet", "Polish chrome fixtures"],
      },
    ],
  },
  {
    type: "move",
    name: "Move-In / Move-Out Services",
    icon: Truck,
    description: "Start fresh in your new Boston home or leave your old place spotless for the next tenant.",
    image:
      "https://images.pexels.com/photos/7546566/pexels-photo-7546566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    checklist: [
      {
        category: "Full Deep Clean, Plus:",
        items: ["Clean inside all appliances", "Wipe inside all cabinets & drawers", "Clean inside closets", "Spot-clean walls & doors", "Remove cobwebs throughout", "Clean window tracks"],
      },
      {
        category: "Kitchen",
        items: ["Clean inside refrigerator", "Clean inside oven", "Degrease all surfaces", "Deep clean pantry", "Sanitize all countertops"],
      },
      {
        category: "Throughout Home",
        items: ["Vacuum every room", "Mop all hard floors", "Clean all light fixtures", "Dust all ledges & shelves", "Sanitize high-touch surfaces"],
      },
    ],
  },
];
