import { motion } from "motion/react";
import {
  ArrowUpRight,
  Target,
  Crosshair,
  Wrench,
  Users,
  Shield,
  Gauge,
} from "lucide-react";

const projects = [
  {
    title: "Smash & Fall Ragdoll: Kick Doll",
    tag: "Action / Ragdoll",
    icon: Target,
    gradient: "from-red-600 via-red-900 to-black",
    link: "https://play.google.com/store/apps/details?id=com.uds.doll.smash.kick.fun.game",
  },
  {
    title: "FPS Shooting: Gun Games",
    tag: "FPS / Shooter",
    icon: Crosshair,
    gradient: "from-red-500 via-red-800 to-zinc-950",
    link: "https://play.google.com/store/apps/details?id=com.freefirebattle.squadsurvival.battlestrike",
  },
  {
    title: "Car Repair Garage Master",
    tag: "Simulation",
    icon: Wrench,
    gradient: "from-rose-600 via-red-950 to-black",
    link: "https://play.google.com/store/apps/details?id=com.uds.CarMechanicAutoRepair",
  },
  {
    title: "Family Dad Life: Mom Simulator",
    tag: "Simulation / Casual",
    icon: Users,
    gradient: "from-red-700 via-zinc-900 to-black",
    link: "https://play.google.com/store/apps/details?id=com.uds.VirtualDadLife",
  },
  {
    title: "Gangster Games: City Crime",
    tag: "Action / Open World",
    icon: Shield,
    gradient: "from-orange-600 via-red-900 to-black",
    link: "https://play.google.com/store/apps/details?id=com.uds.gangstergames.Crime.City.openworld",
  },
  {
    title: "Monster Truck Driving Games",
    tag: "Racing / Simulation",
    icon: Gauge,
    gradient: "from-red-600 via-red-950 to-zinc-950",
    link: "https://play.google.com/store/apps/details?id=com.uds.MonterTruckSimulation",
  },
];

export function Portfolio() {
  return (
    <section id="games" className="relative py-24">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Portfolio</span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
              Our <span className="text-gradient-red">Games & Projects</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Published titles across action, simulation, racing and open-world
            genres — live on the Google Play Store.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary"
            >
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,30,30,0.45),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_60%,rgba(0,0,0,0.6))]" />
                <div
                  className="absolute -right-20 top-0 h-full w-2/3 opacity-30"
                  style={{
                    background: "linear-gradient(135deg, #FF1E1E, transparent)",
                    clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                />
                <p.icon className="absolute left-6 top-6 h-8 w-8 text-white/80" strokeWidth={1.5} />
                <p.icon
                  className="absolute right-1/2 top-1/2 h-32 w-32 -translate-y-1/2 translate-x-1/2 text-white/90 transition duration-500 group-hover:scale-110"
                  strokeWidth={1}
                />
                <span className="absolute bottom-4 left-6 rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <h3 className="text-lg font-bold leading-tight">{p.title}</h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 rounded-full border border-primary/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  View <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
