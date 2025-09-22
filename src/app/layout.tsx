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
            <div className="text-xl font-extrabold">{SITE_NAME}</div>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-zinc-500">
            © {new Date().getFullYear()} {SITE_NAME}. Some links may be affiliate links.
          </div>
        </footer>
      </body>
    </html>
  );
}
