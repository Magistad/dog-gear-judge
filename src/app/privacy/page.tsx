export const metadata = {
  title: "Privacy Policy — Dog Gear Judge",
  description: "Privacy policy for Dog Gear Judge.",
};

export default function Page() {
  return (
    <div className="prose dark:prose-invert max-w-3xl">
      <h1>Privacy Policy</h1>
      <p>
        We respect your privacy. This website may collect basic analytics
        (such as page views, referrers, and device information) to improve
        content and site performance. We do not sell your personal information.
      </p>
      <h2>Cookies</h2>
      <p>
        We may use cookies to remember preferences and measure traffic. You can
        control cookies through your browser settings.
      </p>
      <h2>Third-Party Links</h2>
      <p>
        Some pages contain outbound links to merchants (e.g., Amazon). When you
        visit those sites, their own privacy policies apply.
      </p>
      <h2>Contact</h2>
      <p>
        For privacy questions, contact the site owner via the Contact page or the
        domain WHOIS email.
      </p>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
