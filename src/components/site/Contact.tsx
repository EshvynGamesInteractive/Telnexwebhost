import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, ArrowRight, Send } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl border border-primary/30 px-8 py-16 text-center md:px-16"
          style={{ background: "var(--gradient-red-dark)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,30,30,0.4),transparent_60%)]" />
          <div
            className="absolute -right-20 top-0 hidden h-full w-1/2 opacity-30 md:block"
            style={{
              background: "linear-gradient(135deg, #FF1E1E, transparent)",
              clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-black sm:text-4xl md:text-5xl">
              Looking For The Best <span className="text-gradient-red">Game & App Development</span> Team?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Let's build your next game, app, or playable ad together.
            </p>
            <a
              href="#contact-form"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105 hover:bg-primary-glow"
            >
              Contact Us Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Get In Touch</span>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Let's Start Your <span className="text-gradient-red">Next Project</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: Mail, title: "Email Us", value: "info@tavelynxgames.com", href: "mailto:info@tavelynxgames.com" },
              { icon: MapPin, title: "Visit Studio", value: "H NO 534-D Chiri Maraan, Androon Mori Gate, Lahore" },
            ].map((c) => (
              <motion.a
                key={c.title}
                href={c.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition hover:border-primary"
              >
                <div
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-xl text-primary-foreground shadow-[var(--shadow-glow-sm)]"
                  style={{ background: "var(--gradient-red)" }}
                >
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">{c.title}</p>
                  <p className="mt-1 font-semibold text-foreground">{c.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="rounded-2xl border border-primary/30 p-6" style={{ background: "var(--gradient-red-dark)" }}>
              <p className="font-display text-2xl font-black">Working Hours</p>
              <p className="mt-2 text-sm text-muted-foreground">Mon – Sat · 10:00 AM – 7:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday closed</p>
            </div>
          </div>

          <motion.form
            id="contact-form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name" name="name" placeholder="John Doe" />
              <Field label="Email Address" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Project Type
              </label>
              <select
                name="project"
                required
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition focus:border-primary"
              >
                <option>Mobile Game Development</option>
                <option>HTML5 Playable Ad</option>
                <option>Unity Game Development</option>
                <option>Android / iOS App</option>
                <option>UI/UX Design</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-glow-sm)] transition hover:scale-[1.02] hover:bg-primary-glow sm:w-auto"
            >
              {sent ? "Message Sent!" : "Send Message"} <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition focus:border-primary"
      />
    </div>
  );
}
