import { Button } from "@/app/components/button";
import { IntroSection } from "@/app/components/intro-section";
import { ProjectSection } from "@/app/components/project-section";
import { TechBadge } from "@/app/components/tech-badge";
import { TextLink } from "@/app/components/text-link";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const TECHS = [
  "Next",
  "NextAuth",
  "Tailwindcss",
  "Typescript",
  "Prisma",
  "ReactQuery",
];

export const HeroSection = () => {
  return (
    <ProjectSection>
      <div
        className="absolute w-full inset-0 z-[-1]"
        style={{
          background: `url(/images/background.svg) no-repeat center/cover, url(/images/example-project.png) no-repeat center/cover`,
        }}
      />

      <section className="text-center">
        <IntroSection title="projetos" />
        <h1 className="text-4xl font-medium leading-9 text-gray-300 mt-3">
          BookWise
        </h1>
        <p className="text-gray-400 text-base font-normal leading-6 mt-6">
          BookWise é uma plataforma de avaliação de livros que foi desenvolvida
          durante o bootcamp Ignite da Rocketseat. Com apenas um Figma
          precisavamos desenvolver essa aplicação completa Full Stack com
          Next.js.
        </p>
        <div className="flex justify-center items-center mt-7">
          <div className="w-full max-w-[330px] flex flex-wrap items-center justify-center gap-2">
            {TECHS.map((tech, i) => {
              return <TechBadge name={tech} key={i} />;
            })}
          </div>
        </div>
      </section>

      <div className="flex items-center gap-2 justify-between">
        <Link href="/">
          <Button>
            <FaGithub size={24} />
            <span>Ver Repositório</span>
          </Button>
        </Link>

        <Link href="/">
          <Button>
            <RiGlobalLine size={24} />
            <span>Projeto Online</span>
          </Button>
        </Link>
      </div>

      <TextLink uri="/projects">
        <IoIosArrowRoundBack size={24} />
        <span>Voltar para Projetos</span>
      </TextLink>
    </ProjectSection>
  );
};
