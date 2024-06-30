"use client";

import { useEffect, useState } from "react";
import { IProjectFront } from "../../../../../../prisma/index";
import { HeroSection } from "@/app/components/pages/project/hero-section";
import { ProjectInfoSection } from "@/app/components/pages/projects/project-info-section";

interface ProjectWithDateProps {
  id: string;
}

export default function ProjectWithDate({ id }: ProjectWithDateProps) {
  const [projectDate, setProjectDate] = useState<IProjectFront>();

  const fetchDateProject = async (id: string) => {
    try {
      const date = await fetch(`/api/project/${id}`);

      if (!date) {
        throw new Error("Failed Request for Project");
      }

      const response = await date.json();

      console.log(response);
      

      setProjectDate(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDateProject(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex flex-col gap-6 md:gap-24">
      {projectDate && (
        <>
          <HeroSection project={projectDate} />
          <ProjectInfoSection project={projectDate} />
        </>
      )}
    </main>
  );
}
