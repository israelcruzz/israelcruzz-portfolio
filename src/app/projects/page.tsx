import { Metadata } from "next";
import { HeroSection } from "../components/pages/projects/hero-section";
import { ProjectSection } from "../components/pages/projects/projects-section";

export const metadata: Metadata = {
  title: "Projetos",
};

export default function Projects() {
  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      <HeroSection />
      <ProjectSection />
    </main>
  );
}
