import { Metadata } from "next";
import { HeroSection } from "./components/pages/home/hero-section";
import { TechCardsSection } from "./components/pages/home/tech-cards-section";
import { ProjectsCardSection } from "./components/pages/home/projects-card-section";

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      <HeroSection />
      <TechCardsSection />
      <ProjectsCardSection />
    </main>
  );
}
