import { sampleProducts } from "@/lib/products.sample";
import { top3ConsumerRated } from "@/lib/sorting";
import ProductsGrid from "@/components/ProductsGrid";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase();
  const inCategory = sampleProducts.filter(p => (p.category || "").toLowerCase() === slug);
  const { items, topPick } = top3ConsumerRated(inCategory);

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: `Category: ${slug}` }]} />

      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-extrabold">
          Best {slug} — Top 3 Consumer Rated
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          Filtered for 4★+ products, sorted by review count ascending. Highest review count appears as <span className="font-semibold">TOP PICK</span>.
        </p>
      </header>

      {items.length === 0 ? (
        <p className="text-zinc-500">No qualifying products found in this category yet.</p>
      ) : (
        <ProductsGrid products={items} topPick={topPick} />
      )}
    </div>
  );
}
