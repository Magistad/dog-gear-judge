export const metadata = {
  title: "Affiliate Disclosure — Dog Gear Judge",
  description: "Affiliate disclosure for Dog Gear Judge.",
};

export default function Page() {
  return (
    <div className="prose dark:prose-invert max-w-3xl">
      <h1>Affiliate Disclosure</h1>
      <p>
        Dog Gear Judge participates in affiliate programs. As an Amazon Associate,
        we earn from qualifying purchases.
      </p>
      <p>
        Some links on this site are affiliate links. This means if you click
        a link and make a purchase, we may receive a commission at no extra cost to you.
        We only feature products with customer ratings of 4 stars or higher,
        and we rank them based on verified review counts.
      </p>
      <p>
        Our goal is to help you make informed buying decisions. Commissions help
        support the site so we can keep testing, curating, and improving our guides.
      </p>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
