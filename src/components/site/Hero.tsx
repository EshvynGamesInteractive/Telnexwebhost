import { motion } from "motion/react";
import { ArrowRight, Gamepad2, Smartphone, Zap, Palette } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Gamepad2, label: "Game Development" },
  { icon: Zap, label: "Playable Ads" },
  { icon: Smartphone, label: "App Development" },
  { icon: Palette, label: "UI/UX Design" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Diagonal red overlays */}
      <div
        className="pointer-events-none absolute -right-20 top-0 hidden h-full w-1/3 opacity-30 md:block"
        style={{
          background: "var(--gradient-red)",
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-10 top-0 hidden h-full w-1/4 opacity-20 md:block"
        style={{
          background: "linear-gradient(135deg, #FF1E1E, transparent)",
          clipPath: "polygon(60% 0, 100% 0, 100% 100%, 20% 100%)",
        }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary"
            style={{
              left: `${(i * 37) % 100}%`,
              bottom: `-10vh`,
              animation: `particle ${8 + (i % 6)}s linear infinite`,
              animationDelay: `${i * 0.6}s`,
              boxShadow: "0 0 8px #FF1E1E",
            }}
          />
        ))}
      </div>

      <div className="container-x relative grid min-h-[88vh] grid-cols-1 items-center gap-10 py-20 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            We are a creative gaming studio ~
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Build <span className="text-gradient-red">Powerful Games</span> For Today's Digital World.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            We create engaging mobile games, HTML5 playable ads, and interactive digital experiences that help brands grow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105 hover:bg-primary-glow"
            >
              Get Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#games"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur-sm transition hover:border-primary hover:bg-primary/10"
            >
              View Games
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-4 backdrop-blur-md transition hover:border-primary/60"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition group-hover:opacity-100" />
                <s.icon className="h-6 w-6 text-primary" />
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-foreground sm:text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
