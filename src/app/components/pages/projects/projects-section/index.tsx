"use client";

import { ProjectCard } from "@/app/components/project-card";
import { IProjectFront } from "../../../../../../prisma/seed";

interface ProjectSectionProps {
  projects: IProjectFront[];
}

export const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-2 mb-24">
      {projects.map((proj, i) => {
        return (
          <ProjectCard
            project={proj}
            key={i}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        );
      })}
    </main>
  );
};
