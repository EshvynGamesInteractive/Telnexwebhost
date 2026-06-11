import { useEffect, useState } from "react";
import { MapPin, Mail, Menu, X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/tavelynx-logo.png";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Games", href: "#games" },
  { label: "Services", href: "#services" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="hidden bg-secondary/80 text-xs text-muted-foreground md:block">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span className="truncate">H NO 534-D Chiri Maraan, Androon Mori Gate, Lahore</span>
          </div>
          <a
            href="mailto:info@tavelynxgames.com"
            className="flex items-center gap-2 hover:text-primary"
          >
            <Mail className="h-3.5 w-3.5 text-primary" />
            info@tavelynxgames.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`relative transition-all duration-300 ${
          scrolled
            ? "bg-background/80 shadow-[0_8px_30px_-10px_rgba(255,30,30,0.25)] backdrop-blur-xl"
            : "bg-background/40 backdrop-blur-md"
        }`}
      >
        <div className="container-x flex h-20 items-center gap-4">
          {/* Diagonal logo block */}
          <a href="#home" className="relative -ml-4 flex h-20 items-center pr-10 md:pr-14">
            <div
              className="absolute inset-0 clip-diagonal"
              style={{ background: "var(--gradient-red)" }}
            />
            <div className="absolute inset-0 clip-diagonal bg-black/30 mix-blend-overlay" />
            <div className="relative flex items-center gap-2 pl-6 pr-4">
              <img src={logo} alt="TAVELYNX GAMES" className="h-9 w-auto md:h-10" />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="ml-6 hidden flex-1 items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 transition hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="ml-auto hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-glow-sm)] transition hover:scale-[1.03] hover:bg-primary-glow lg:inline-flex"
          >
            Get a quote now <ArrowRight className="h-4 w-4" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
            <nav className="container-x flex flex-col py-4">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/50 py-3 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold uppercase text-primary-foreground"
              >
                Get a quote now <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
