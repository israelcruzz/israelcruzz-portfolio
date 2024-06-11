import { Divider } from "@/app/components/divider";
import { ProjectCardSection } from "@/app/components/project-card-section";
import { TextLink } from "@/app/components/text-link";
import { TextSection } from "@/app/components/text-section";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export const ProjectsCardSection = () => {
  return (
    <div>
      <TextSection title="destaques" heading="Projetos em destaque" />
      <div className="flex flex-col">
        {Array.from({ length: 2 }).map((_, i) => (
          <React.Fragment key={i}>
            <ProjectCardSection
              title="BookWise"
              description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
              imageUri="/images/example-project.png"
              techs={["Next", "Prisma", "Typescript", "React", "Tailwindcss"]}
              uri="/projects"
            />
            <div className="mt-6 mb-6 md:mt-12 md:mb-12">
              <Divider />
            </div>
          </React.Fragment>
        ))}
      </div>
      
      <div className="flex gap-1 mb-24">
        <span className="text-gray-400 text-base leading-6 font-normal">Se interessou?</span>
        <TextLink uri="/projects">
          <span>Ver Todos</span>
          <IoIosArrowRoundForward size={24} />
        </TextLink>
      </div>
    </div>
  );
};
