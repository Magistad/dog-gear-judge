import "./globals.css";
import type { Metadata } from "next";

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "Dog Gear Judge";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://doggearjudge.com";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Top 3 Consumer Rated Picks`,
  description: "Independent rankings of dog gear based on 4+ star products and verified review counts.",
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-black dark:bg-black dark:text-white antialiased">
        <header className="border-b border-zinc-200 dark:border-zinc-800">
  <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
    <div className="text-xl font-extrabold tracking-tight">
      {SITE_NAME}
    </div>
    <nav className="text-sm text-zinc-600 dark:text-zinc-300 flex flex-wrap items-center gap-4">
  <a href="/" className="hover:underline">Home</a>
  <a href="/category/harnesses" className="hover:underline">Harnesses</a>
  <a href="/category/leashes" className="hover:underline">Leashes</a>
  <a href="/category/bowls" className="hover:underline">Bowls</a>
  <a href="/category/collars" className="hover:underline">Collars</a>
</nav>
  </div>
</header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
<footer className="border-t border-zinc-200 dark:border-zinc-800">
  <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-2">
    <div>
      © {new Date().getFullYear()} {SITE_NAME}. Some links may be affiliate links.
    </div>
    <div className="flex gap-4">
      <a href="/legal/affiliate-disclosure" className="hover:underline">Disclosure</a>
      <a href="/privacy" className="hover:underline">Privacy</a>
      <a href="/terms" className="hover:underline">Terms</a>
    </div>
  </div>
</footer>
      </body>
    </html>
  );
}
