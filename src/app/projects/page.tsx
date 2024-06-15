import { Metadata } from "next";
import { HeroSection } from "../components/pages/projects/hero-section";
import { ProjectCard } from "../components/project-card";

export const metadata: Metadata = {
  title: "Projetos",
};

export default function Projects() {
  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      <HeroSection />
      <ProjectCard />
    </main>
  );
}
