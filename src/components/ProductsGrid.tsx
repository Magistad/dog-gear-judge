"use client";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

export default function ProductsGrid({ products, topPick }: { products: Product[]; topPick: Product | null }) {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {products.map(p => (
        <ProductCard key={p.asin} product={p} badge={topPick && p.asin === topPick.asin ? "TOP PICK" : undefined} />
      ))}
    </section>
  );
}
