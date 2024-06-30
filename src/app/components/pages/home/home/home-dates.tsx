"use client";

import { useCallback, useEffect, useState } from "react";
import { IProjectFront, ITech } from "../../../../../../prisma";
import { HeroSection } from "../hero-section";
import { TechCardsSection } from "../tech-cards-section";
import { ProjectsCardSection } from "../projects-card-section";

export default function HomeDates() {
  const [prominencesTechs, setProminencesTechs] = useState<ITech[]>();
  const [techs, setTechs] = useState<ITech[]>();
  const [projects, setProjects] = useState<IProjectFront[]>();

  const fetchTechsDate = async () => {
    const techs = await fetch("/api/tech");

    if (!techs) {
      throw new Error("Failed to fetch techs");
    }

    const response = await techs.json();

    setTechs(response);
  };

  const fetchProminencesTechsDate = async () => {
    const techs = await fetch("/api/tech/prominence");

    if (!techs) {
      throw new Error("Failed to fetch techs");
    }

    const response = await techs.json();

    setProminencesTechs(response);
  };

  const fetchProjectsData = async () => {
    const projects = await fetch("/api/project/prominence");

    if (!projects) {
      throw new Error("Failed to fetch projects");
    }

    const response = await projects.json();

    setProjects(response);
  };

  const fetchAnyDates = async () => {
    await fetchTechsDate();
    await fetchProminencesTechsDate();
    await fetchProjectsData();
  };

  useEffect(() => {
    fetchAnyDates();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      {prominencesTechs && techs && projects && (
        <>
          <HeroSection techs={prominencesTechs} />
          <TechCardsSection techs={techs} />
          <ProjectsCardSection projects={projects} />
        </>
      )}
    </main>
  );
}
