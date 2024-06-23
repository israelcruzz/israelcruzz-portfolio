import { Metadata } from "next";
import { HeroSection } from "../components/pages/projects/hero-section";
import { ProjectSection } from "../components/pages/projects/projects-section";
import { IProjectFront } from "../../../prisma/seed";
import axios from "axios";

export const metadata: Metadata = {
  title: "Projetos",
};

export async function fetchProjectsDate() {
  try {
    const projects = await axios.get(process.env.URL + "/api/project");

    if (!projects) {
      throw new Error("Failed Fetch Projects");
    }

    console.table(projects.data);

    return projects.data;
  } catch (error) {
    console.log(error)
    return;
  }
}

export default async function Projects() {
  const projects: IProjectFront[] = await fetchProjectsDate();

  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      <HeroSection />
      <ProjectSection projects={projects} />
    </main>
  );
}
