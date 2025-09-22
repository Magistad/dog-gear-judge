import type { Product } from "./types";

/**
 * Filters items with rating >= 4,
 * sorts by reviewCount ascending,
 * returns first 3,
 * marks the last item (highest reviews) as the TOP PICK.
 */
export function top3ConsumerRated(products: Product[]) {
  const eligible = products
    .filter(p => p.rating >= 4)
    .sort((a, b) => a.reviewCount - b.reviewCount);

  const selected = eligible.slice(0, 3);
  return {
    items: selected,
    topPick: selected[selected.length - 1] || null,
  };
}
