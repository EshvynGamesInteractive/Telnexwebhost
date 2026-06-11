import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Mail, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TAVELYNX GAMES" },
      { name: "description", content: "Learn how TAVELYNX GAMES collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy — TAVELYNX GAMES" },
      { property: "og:description", content: "Learn how TAVELYNX GAMES collects, uses, and protects your information." },
    ],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
        <span className="text-primary">/</span> {title}
      </h2>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-black py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(255,30,30,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,30,30,0.15), transparent 55%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #FF1E1E, transparent)" }}
        />
        <div className="container-x relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to home
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary shadow-[var(--shadow-glow-sm)]">
              <Shield className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Legal</p>
              <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-foreground md:text-6xl">
                Privacy Policy
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            Last Updated: June 11, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="container-x grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="text-lg leading-relaxed text-foreground/90">
            TAVELYNX GAMES (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your
            privacy and is committed to protecting any information you provide when
            using our website.
          </p>

          <Section title="Information We Collect">
            <p>We may collect:</p>
            <ul className="ml-5 list-disc space-y-2 marker:text-primary">
              <li>Name and email address when you contact us.</li>
              <li>Information you voluntarily provide through contact forms.</li>
              <li>Technical information such as browser type, device information, IP address, and website usage statistics.</li>
            </ul>
          </Section>

          <Section title="How We Use Information">
            <p>We may use collected information to:</p>
            <ul className="ml-5 list-disc space-y-2 marker:text-primary">
              <li>Respond to inquiries and support requests.</li>
              <li>Improve our website and services.</li>
              <li>Monitor website performance and security.</li>
              <li>Communicate important updates.</li>
            </ul>
          </Section>

          <Section title="Cookies and Analytics">
            <p>
              Our website may use cookies and analytics tools to understand visitor
              behavior and improve user experience.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>
              We may use third-party services such as analytics providers, hosting
              providers, and advertising partners. These services may collect
              information according to their own privacy policies.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              We take reasonable measures to protect your information from
              unauthorized access, disclosure, or misuse.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Our website is not intended for children under the age of 13. We do
              not knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will
              be posted on this page.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-card p-6">
              <p className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
                TAVELYNX GAMES
              </p>
              <a
                href="mailto:info@tavelynxgames.com"
                className="mt-3 inline-flex items-center gap-2 text-primary hover:text-primary-glow"
              >
                <Mail className="h-4 w-4" />
                info@tavelynxgames.com
              </a>
            </div>
          </Section>
        </div>

        {/* Sidebar TOC */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-xl border border-border bg-card p-6">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              On this page
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Information We Collect",
                "How We Use Information",
                "Cookies and Analytics",
                "Third-Party Services",
                "Data Security",
                "Children's Privacy",
                "Changes to This Policy",
                "Contact Us",
              ].map((s) => (
                <li key={s} className="border-l-2 border-border pl-3 transition hover:border-primary hover:text-primary">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </article>

      <Footer />
    </div>
  );
}
