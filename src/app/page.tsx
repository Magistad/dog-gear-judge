import { sampleProducts } from "@/lib/products.sample";
import { top3ConsumerRated } from "@/lib/sorting";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const { items, topPick } = top3ConsumerRated(sampleProducts);

  return (
    <div className="space-y-8">
      <section className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Top 3 Consumer Rated Dog Gear
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          We filter for 4+ star ratings, sort by review count ascending, and feature the product with the most reviews last as our <span className="font-semibold">TOP PICK</span>.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {items.map(p => (
          <ProductCard
            key={p.asin}
            product={p}
            badge={topPick && p.asin === topPick.asin ? "TOP PICK" : undefined}
          />
        ))}
      </section>
    </div>
  );
}
