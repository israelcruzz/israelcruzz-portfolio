"use client";

import { ProjectInfo } from "@/app/components/project-info";
import { IProjectFront } from "../../../../../../prisma";

interface ProjectInfoSection {
  project: IProjectFront;
}

export const ProjectInfoSection = ({ project }: ProjectInfoSection) => {
  return (
    <div className="container flex flex-col gap-6">
      {project.projectSection.map((proj, i) => {
        return (
          <ProjectInfo
            title={proj.name}
            imageUri={proj.imageUri}
            key={i}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        );
      })}
    </div>
  );
};
