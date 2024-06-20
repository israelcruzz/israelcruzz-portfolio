import { ProjectInfo } from "@/app/components/project-info";
import { IProjectFront } from "../../../../../../prisma/seed";

interface ProjectInfoSection {
  project: IProjectFront;
}

export const ProjectInfoSection = ({ project }: ProjectInfoSection) => {
  return (
    <div className="container flex flex-col gap-6">
      {project.projectSection.map((proj, i) => {
        return (
          <ProjectInfo title={proj.name} imageUri={proj.imageUri} key={i} />
        );
      })}
    </div>
  );
};
