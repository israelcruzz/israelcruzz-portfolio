import { Metadata } from "next";
import { HeroSection } from "./components/pages/home/hero-section";
import { TechCardsSection } from "./components/pages/home/tech-cards-section";
import { ProjectsCardSection } from "./components/pages/home/projects-card-section";
import { IProject, IProjectFront, ITech } from "../../prisma/seed";
import axios from "axios";

export const metadata: Metadata = {
  title: "Home",
};

const fetchTechsDate = async () => {
  const techs = await axios.get(process.env.URL + "/api/tech");

  if (!techs) {
    throw new Error("Failed to fetch techs");
  }

  console.table(techs.data);
  return techs.data;
};

const fetchProminencesTechsDate = async () => {
  const techs = await axios.get(process.env.URL + "/api/tech/prominence");

  if (!techs) {
    throw new Error("Failed to fetch techs");
  }

  console.table(techs.data);

  return techs.data;
};

const fetchProjectsData = async () => {
  const projects = await axios.get(process.env.URL + "/api/project/prominence");

  if (!projects) {
    throw new Error("Failed to fetch projects");
  }

  console.table(projects.data);

  return projects.data;
};

export default async function Home() {
  const techs = await fetchTechsDate();
  const prominencesTechs: ITech[] = await fetchProminencesTechsDate();
  const projects: IProjectFront[] = await fetchProjectsData();

  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      <HeroSection techs={prominencesTechs} />
      <TechCardsSection techs={techs} />
      <ProjectsCardSection projects={projects} />
    </main>
  );
}
