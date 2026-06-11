import { motion } from "motion/react";
import { Sparkles, Rocket, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-red)" }}
      />
      <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-primary/30 bg-secondary p-1">
            <div
              className="flex h-full w-full flex-col items-center justify-center rounded-[1.4rem]"
              style={{ background: "var(--gradient-red-dark)" }}
            >
              <div className="grid h-32 w-32 place-items-center rounded-full bg-background/30 backdrop-blur-sm animate-pulse-glow">
                <Sparkles className="h-14 w-14 text-primary" />
              </div>
              <p className="mt-6 font-display text-5xl font-black tracking-tight">10+</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">Years of Craft</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] backdrop-blur md:block">
            <p className="font-display text-3xl font-black text-primary">50+</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Games Shipped</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">About TAVELYNX GAMES</span>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            A Passionate Game Studio Built For{" "}
            <span className="text-gradient-red">Modern Digital Products.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            TAVELYNX GAMES is a Lahore-based creative game and app development studio focused on building
            high-performing games, playable ads, and interactive digital products. We combine design,
            development, and optimization to deliver smooth, engaging, and market-ready experiences.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Sparkles, title: "Creative Game Design", desc: "Original concepts, memorable art and tight mechanics." },
              { icon: Rocket, title: "Fast & Reliable Development", desc: "Agile delivery without compromising polish or quality." },
            ].map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-5 backdrop-blur transition hover:border-primary/60"
              >
                <f.icon className="h-7 w-7 text-primary" />
                <h4 className="mt-3 font-bold">{f.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {["Cross-platform builds", "Unity & HTML5 expertise", "Pixel-perfect UI", "Ongoing support"].map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
