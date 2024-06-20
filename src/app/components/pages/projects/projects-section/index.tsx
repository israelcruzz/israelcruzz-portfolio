import { ProjectCard } from "@/app/components/project-card";
import { IProject, IProjectFront } from "../../../../../../prisma/seed";

interface ProjectSectionProps {
  projects: IProjectFront[];
}

export const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-2 mb-24">
      {projects.map((proj, i) => {
        return <ProjectCard project={proj} key={i} />;
      })}
    </main>
  );
};
