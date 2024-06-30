"use client";

import { useEffect, useState } from "react";
import { IProjectFront } from "../../../../../../prisma";
import { HeroSection } from "@/app/components/pages/projects/hero-section";
import { ProjectSection } from "@/app/components/pages/projects/projects-section";

export const ProjectDate = () => {
  const [projects, setProjects] = useState<IProjectFront[]>();

  async function fetchProjectsDate() {
    try {
      const projects = await fetch("/api/project");

      if (!projects) {
        throw new Error("Failed Fetch Projects");
      }

      const response = await projects.json();

      setProjects(response);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  useEffect(() => {
    fetchProjectsDate();
  }, [])

  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      <HeroSection />

      {projects && <ProjectSection projects={projects} />}
    </main>
  );
};
