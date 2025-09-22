"use client";
import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav className="text-sm text-zinc-600 dark:text-zinc-300" aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <span key={idx}>
          {item.href ? <Link className="hover:underline" href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          {idx < items.length - 1 && <span className="mx-2">›</span>}
        </span>
      ))}
    </nav>
  );
}
