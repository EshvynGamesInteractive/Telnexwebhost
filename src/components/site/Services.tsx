import { motion } from "motion/react";
import { Gamepad2, Zap, Box, Smartphone, Palette, Wrench } from "lucide-react";

const services = [
  { icon: Gamepad2, title: "Mobile Game Development", desc: "Engaging, optimized mobile games for iOS and Android with stunning visuals and smooth gameplay." },
  { icon: Zap, title: "HTML5 Playable Ads", desc: "Interactive playable ads that drive installs and elevate brand engagement across networks." },
  { icon: Box, title: "Unity Game Development", desc: "End-to-end Unity development for 2D, 3D and cross-platform game experiences." },
  { icon: Smartphone, title: "Android & iOS Apps", desc: "Native and cross-platform mobile apps built with performance and scalability in mind." },
  { icon: Palette, title: "Game UI/UX Design", desc: "Distinctive game interfaces, HUDs and menus crafted for clarity and delight." },
  { icon: Wrench, title: "Optimization & Bug Fixing", desc: "Performance tuning, profiling and stability fixes to ship a polished product." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Our Creative Services</span>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            We Build Quality <span className="text-gradient-red">Games, Apps & Playable Ads.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition hover:border-primary/60 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition group-hover:opacity-100" />
              <div
                className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl text-primary-foreground shadow-[var(--shadow-glow-sm)]"
                style={{ background: "var(--gradient-red)" }}
              >
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 h-px w-12 bg-primary transition-all group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
