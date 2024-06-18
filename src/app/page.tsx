import { Metadata } from "next";
import { HeroSection } from "./components/pages/home/hero-section";
import { TechCardsSection } from "./components/pages/home/tech-cards-section";
import { ProjectsCardSection } from "./components/pages/home/projects-card-section";
import { ITech } from "../../prisma/seed";

export const metadata: Metadata = {
  title: "Home",
};

const fetchTechsDate = async () => {
  const techs = await fetch(process.env.URL + "/api/tech");

  if (!techs.ok) {
    throw new Error("Failed to fetch techs");
  }

  const response = await techs.json();
  return response;
};

const fetchProminencesTechsDate = async () => {
  const techs = await fetch(process.env.URL + "/api/tech/prominence");

  if (!techs.ok) {
    throw new Error("Failed to fetch techs");
  }

  const response = await techs.json();

  console.log(response);
  
  return response;
};

export default async function Home() {
  const techs = await fetchTechsDate();
  const prominencesTechs: ITech[] = await fetchProminencesTechsDate();

  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      <HeroSection techs={prominencesTechs} />
      <TechCardsSection techs={techs} />
      <ProjectsCardSection />
    </main>
  );
}
