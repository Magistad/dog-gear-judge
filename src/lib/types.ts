export type Product = {
  asin: string;
  title: string;
  brand?: string;
  image: string;
  link: string;
  rating: number;       // 0..5
  reviewCount: number;  // integer
  price?: string;
  category?: string;    // e.g. "harnesses", "leashes", "bowls"
};

