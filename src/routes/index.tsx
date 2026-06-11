import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { ContactCTA, Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TAVELYNX GAMES — Premium Game & App Development Studio" },
      {
        name: "description",
        content:
          "TAVELYNX GAMES is a Lahore-based creative studio building mobile games, HTML5 playable ads, and interactive digital products.",
      },
      { property: "og:title", content: "TAVELYNX GAMES — Premium Game & App Development Studio" },
      {
        property: "og:description",
        content: "Mobile games, playable ads, Unity development and UI/UX crafted for modern brands.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <WhyChooseUs />
        <ContactCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
