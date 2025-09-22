"use client";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import RatingStars from "./RatingStars";

export default function ProductCard({
  product,
  badge,
}: { product: Product; badge?: "TOP PICK" }) {
  return (
    <div className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm hover:shadow-md transition">
      {badge && (
        <div className="absolute -top-3 left-4 rounded-full px-3 py-1 text-xs font-semibold bg-black text-white dark:bg-zinc-100 dark:text-black">
          {badge}
        </div>
      )}

      <div className="relative w-full h-56 rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-base font-semibold">{product.title}</h3>
        {product.brand && <p className="text-sm text-zinc-500">{product.brand}</p>}

        <div className="flex items-center gap-2 text-sm">
          <RatingStars value={product.rating} />
          <span className="text-zinc-600">{product.reviewCount.toLocaleString()} reviews</span>
        </div>

        {product.price && <p className="text-sm font-semibold mt-1">{product.price}</p>}

        <Link
          href={product.link}
          target="_blank"
          rel="nofollow noopener sponsored"
          className="mt-3 inline-flex items-center justify-center rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900"
        >
          View on Amazon
        </Link>
      </div>
    </div>
  );
}

