import { Divider } from "@/app/components/divider";
import { ProjectCardSection } from "@/app/components/project-card-section";
import { TextLink } from "@/app/components/text-link";
import { TextSection } from "@/app/components/text-section";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IProject } from "../../../../../../prisma/seed";

interface ProjectsCardSectionProps {
  projects: IProject[];
}

export const ProjectsCardSection = ({ projects }: ProjectsCardSectionProps) => {
  
  return (
    <div>
      <TextSection title="destaques" heading="Projetos em destaque" />
      <div className="flex flex-col">
        {projects.map((proj, i) => (
          <React.Fragment key={i}>
            <ProjectCardSection
              title={proj.title}
              description={proj.description}
              imageUri={proj.thumbUri}
              techs={proj.techs && proj.techs.map((proj) => proj.name)}
              uri={`/projects/${proj.title}`}
            />
            <div className="mt-6 mb-6 md:mt-12 md:mb-12">
              <Divider />
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="flex gap-1 mb-24">
        <span className="text-gray-400 text-base leading-6 font-normal">
          Se interessou?
        </span>
        <TextLink uri="/projects">
          <span>Ver Todos</span>
          <IoIosArrowRoundForward size={24} />
        </TextLink>
      </div>
    </div>
  );
};
