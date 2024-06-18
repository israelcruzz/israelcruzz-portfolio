"use client";

import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { ITech } from "../../../../../../prisma/seed";

interface HeroSectionProps {
  techs: ITech[];
}

const CONTACTS = [
  {
    name: "Linkedin",
    imageComponent: (
      <FaLinkedin size={24} className="text-gray-400 hover:text-white" />
    ),
    link: "https://www.linkedin.com/in/israel-cruz-77a23b25b/?originalSubdomain=br",
  },
  {
    name: "Github",
    imageComponent: (
      <FaGithub size={24} className="text-gray-400 hover:text-white" />
    ),
    link: "https://github.com/israelcruzz",
  },
];

export const HeroSection = ({ techs }: HeroSectionProps) => {
  const handleClickContactMe = () => {
    const sectionContact = document.getElementById("contact");

    if (sectionContact) {
      sectionContact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="grid grid-cols-1 mt-24 py-6 gap-6 md:grid-cols-2 items-center md:gap-[130px] md:py-12">
      <section>
        <span className="text-emerald-400 text-base font-normal mb-2">
          Desenvolvedor Fullstack
        </span>
        <h1 className="font-medium text-4xl text-gray-300">Israel Cruz</h1>

        <p className="font-normal text-base leading-6 text-gray-400 mt-4">
          Olá, meu nome é Israel Cruz e sou um desenvolvedor fullstack
          apaixonado por tecnologia. Meu objetivo é criar interfaces de usuário
          bonitas e funcionais, além de liderar equipes técnicas em projetos
          desafiadores. Estou sempre aberto a novas oportunidades e desafios.
        </p>

        <div className="flex gap-2 flex-wrap w-[324px] mt-4">
          {techs.map((tech, index) => {
            return <TechBadge name={tech.name} key={index} />;
          })}
        </div>

        <div className="flex gap-4 items-center mt-4">
          <Button onClick={handleClickContactMe}>
            <h1>Entre em contato</h1>
            <HiArrowNarrowRight size={24} color="#FFFFFF" />
          </Button>

          {CONTACTS.map((contact, index) => {
            return (
              <a
                href={contact.link}
                key={index}
                title={contact.name}
                target="_blank"
              >
                {contact.imageComponent}
              </a>
            );
          })}
        </div>
      </section>

      <section className="flex-1">
        <Image
          src="/images/israelcruzz-photo.jpg"
          quality={100}
          width={420}
          height={404}
          alt="Photo Israel Cruz"
          className="w-full h-full object-cover rounded-lg"
        />
      </section>
    </main>
  );
};
