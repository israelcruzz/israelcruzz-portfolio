import { Metadata } from "next";
import { HeroSection } from "../components/pages/projects/hero-section";
import { ProjectSection } from "../components/pages/projects/projects-section";
import { IProject } from "../../../prisma/seed";

export const metadata: Metadata = {
  title: "Projetos",
};

export async function fetchProjectsDate() {
  const projects = await fetch(process.env.URL + "/api/project");

  if (!projects.ok) {
    throw new Error("Failed Fetch Projects");
  }

  const response = await projects.json();

  console.log(response);

  return response;
}

export default async function Projects() {
  const projects: IProject[] = await fetchProjectsDate();

  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      <HeroSection />
      <ProjectSection projects={projects} />
    </main>
  );
}
