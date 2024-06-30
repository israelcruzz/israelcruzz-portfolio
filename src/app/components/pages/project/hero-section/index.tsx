"use client";

import { Button } from "@/app/components/button";
import { IntroSection } from "@/app/components/intro-section";
import { ProjectSection } from "@/app/components/project-section";
import { TechBadge } from "@/app/components/tech-badge";
import { TextLink } from "@/app/components/text-link";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { IProjectFront } from "../../../../../../prisma";
import { motion } from "framer-motion";

interface HeroSectionProps {
  project: IProjectFront;
}

export const HeroSection = ({ project }: HeroSectionProps) => {
  return (
    <ProjectSection>
      <div
        className="absolute w-full inset-0 z-[-1]"
        style={{
          background: `url(/images/background.svg) no-repeat center/cover, url(${project.thumbUri}) no-repeat center/cover`,
        }}
      />

      <motion.section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <IntroSection title="projetos" />
        <h1 className="text-4xl font-medium leading-9 text-gray-300 mt-3">
          {project.title}
        </h1>
        <p className="text-gray-400 text-base font-normal leading-6 mt-6">
          {project.description}
        </p>
        <div className="flex justify-center items-center mt-7">
          <div className="w-full max-w-[330px] flex flex-wrap items-center justify-center gap-2">
            {project.techs.map((tech, i) => {
              return (
                <TechBadge
                  name={tech.name}
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.div
        className="flex items-center gap-2 justify-between"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Link href={project.repoUri}>
          <Button>
            <FaGithub size={24} />
            <span>Ver Repositório</span>
          </Button>
        </Link>

        <Link href={project.deployUri}>
          <Button>
            <RiGlobalLine size={24} />
            <span>Projeto Online</span>
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <TextLink uri="/projects">
          <IoIosArrowRoundBack size={24} />
          <span>Voltar para Projetos</span>
        </TextLink>
      </motion.div>
    </ProjectSection>
  );
};
