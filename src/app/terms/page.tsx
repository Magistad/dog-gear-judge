export const metadata = {
  title: "Terms of Use — Dog Gear Judge",
  description: "Terms of Use for Dog Gear Judge.",
};

export default function Page() {
  return (
    <div className="prose dark:prose-invert max-w-3xl">
      <h1>Terms of Use</h1>
      <p>
        By using this website, you agree to these terms. Content is provided
        “as is” without warranties. We are not responsible for errors, pricing,
        availability, or changes on external merchant sites.
      </p>
      <h2>Affiliate Links</h2>
      <p>
        Some links are affiliate links. As an Amazon Associate, we earn
        from qualifying purchases.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        All content on this site is owned by its respective owners. Do not copy
        content without permission.
      </p>
      <h2>Changes</h2>
      <p>
        We may update these terms at any time. Continued use of the site after
        changes constitutes acceptance.
      </p>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
