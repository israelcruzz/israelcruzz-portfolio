import { Metadata } from "next";
import { HeroSection } from "./components/pages/home/hero-section";
import { TechCardsSection } from "./components/pages/home/tech-cards-section";
import { ProjectsCardSection } from "./components/pages/home/projects-card-section";

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

export default async function Home() {
  const techs = await fetchTechsDate();
  console.log(techs);

  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      <HeroSection />
      <TechCardsSection techs={techs} />
      <ProjectsCardSection />
    </main>
  );
}
