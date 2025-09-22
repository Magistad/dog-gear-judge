export type Product = {
  asin: string;              // Amazon ASIN
  title: string;
  brand?: string;
  image: string;             // absolute URL
  link: string;              // product URL (with tag later)
  rating: number;            // 0..5
  reviewCount: number;       // integer
  price?: string;            // display price e.g. "$29.99"
};
