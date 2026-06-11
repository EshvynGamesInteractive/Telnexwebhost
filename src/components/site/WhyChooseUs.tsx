import { motion } from "motion/react";
import { Award, Activity, Timer, Headphones } from "lucide-react";

const features = [
  { icon: Award, title: "High Quality Game Art", desc: "Hand-crafted visuals with cinematic polish across every frame." },
  { icon: Activity, title: "Smooth Performance", desc: "Optimized rendering and tight code for fluid gameplay on any device." },
  { icon: Timer, title: "Fast Delivery", desc: "Sprint-driven milestones that keep your launch window on track." },
  { icon: Headphones, title: "Long-Term Support", desc: "Post-launch maintenance, updates and live ops you can rely on." },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,30,30,0.18), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Why Choose Us</span>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Why Choose <span className="text-gradient-red">TAVELYNX GAMES?</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-primary"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition group-hover:scale-x-100" />
              <div className="grid h-14 w-14 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <span className="absolute right-4 top-4 font-display text-5xl font-black text-primary/10 transition group-hover:text-primary/30">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
