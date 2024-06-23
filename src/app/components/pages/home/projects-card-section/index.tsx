"use client";

import { Divider } from "@/app/components/divider";
import { ProjectCardSection } from "@/app/components/project-card-section";
import { TextLink } from "@/app/components/text-link";
import { TextSection } from "@/app/components/text-section";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IProjectFront } from "../../../../../../prisma/seed";
import { motion } from "framer-motion";

interface ProjectsCardSectionProps {
  projects: IProjectFront[];
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
              uri={`/projects/${proj.id}`}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
            <div className="mt-6 mb-6 md:mt-12 md:mb-12">
              <Divider />
            </div>
          </React.Fragment>
        ))}
      </div>

      <motion.div
        className="flex gap-1 mb-24"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gray-400 text-base leading-6 font-normal">
          Se interessou?
        </span>
        <TextLink uri="/projects">
          <span>Ver Todos</span>
          <IoIosArrowRoundForward size={24} />
        </TextLink>
      </motion.div>
    </div>
  );
};
