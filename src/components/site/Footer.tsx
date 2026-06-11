import { Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/tavelynx-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-black">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #FF1E1E, transparent)" }}
      />
      <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img src={logo} alt="TAVELYNX GAMES" className="h-10 w-auto" />
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            A Lahore-based creative game studio building mobile games, HTML5 playable ads,
            and interactive digital products for modern brands.
          </p>
        </div>

        <FooterCol title="Quick Links" links={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Games", href: "#games" },
          { label: "Contact", href: "#contact" },
        ]} />

        <FooterCol title="Services" links={[
          { label: "Mobile Games", href: "#services" },
          { label: "Playable Ads", href: "#services" },
          { label: "Unity Development", href: "#services" },
          { label: "UI/UX Design", href: "#services" },
        ]} />

        <div className="lg:col-span-3">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">Studio</p>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>H NO 534-D Chiri Maraan, Androon Mori Gate, Lahore</span>
            </li>
            <li>
              <a href="mailto:info@tavelynxgames.com" className="flex items-center gap-3 hover:text-primary">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@tavelynxgames.com
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition hover:bg-primary-glow"
              >
                Get Quote <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 TAVELYNX GAMES. All rights reserved.</p>
          <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">{title}</p>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition hover:text-primary">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
