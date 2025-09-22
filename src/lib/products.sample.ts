import type { Product } from "./types";

const TAG = process.env.NEXT_PUBLIC_AFFILIATE_TAG || "";

function withTag(url: string) {
  if (!TAG) return url;
  const u = new URL(url);
  u.searchParams.set("tag", TAG);
  return u.toString();
}

export const sampleProducts: Product[] = [
  {
    asin: "B00HARZC3M",
    title: "Hands-Free Dog Leash with Shock Absorber",
    brand: "PawStride",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop",
    link: withTag("https://www.amazon.com/dp/B00HARZC3M"),
    rating: 4.4,
    reviewCount: 214,
    price: "$27.99",
    category: "leashes",
  },
  {
    asin: "B08K9QN1V7",
    title: "No-Pull Harness (Reflective, Adjustable)",
    brand: "TrailHound",
    image: "https://images.unsplash.com/photo-1558944351-cf1f1a6a57f8?q=80&w=1200&auto=format&fit=crop",
    link: withTag("https://www.amazon.com/dp/B08K9QN1V7"),
    rating: 4.7,
    reviewCount: 1860,
    price: "$32.95",
    category: "harnesses",
  },
  {
    asin: "B07Y2N6YWB",
    title: "Collapsible Travel Bowl (2-Pack)",
    brand: "RoamRover",
    image: "/luna.png",
    link: withTag("https://www.amazon.com/dp/B07Y2N6YWB"),
    rating: 4.2,
    reviewCount: 98,
    price: "$12.49",
    category: "bowls",
  },
  {
    asin: "B0BHC4XK1S",
    title: "LED Safety Collar (USB Rechargeable)",
    brand: "GlowPup",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200&auto=format&fit=crop",
    link: withTag("https://www.amazon.com/dp/B0BHC4XK1S"),
    rating: 4.5,
    reviewCount: 640,
    price: "$18.99",
    category: "collars",
  },
];

