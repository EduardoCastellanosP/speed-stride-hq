import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
// import { Stats } from "@/components/landing/Stats";
import { Marquee } from "@/components/landing/Marquee";
// import { Services } from "@/components/landing/Services";
import { WhyUs } from "@/components/landing/WhyUs";
import { Founder } from "@/components/landing/Founder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Running Coaching — Unlock Your True Potential" },
      {
        name: "description",
        content:
          "Custom running coaching: personalized training plans, technique analysis and race strategies that turn everyday runners into fierce competitors.",
      },
      { property: "og:title", content: "Elite Running Coaching — Unlock Your True Potential" },
      {
        property: "og:description",
        content:
          "Personalized training plans, elite technique analysis and complete race strategies from a certified running coach.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <Marquee />
      {/* <Services /> */}
      <WhyUs />
      {/* <Founder /> */}
    </main>
  );
}
