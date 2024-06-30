"use client"

import { TechCard } from "@/app/components/tech-card";
import { TextSection } from "@/app/components/text-section";
import { RiNextjsFill } from "react-icons/ri";
import { ITech } from "../../../../../../prisma";
import { getIconComponent } from "@/utils/get-icon-component";

interface TechCardsSectionProps {
  techs: ITech[];
}

export const TechCardsSection = ({ techs }: TechCardsSectionProps) => {
  return (
    <div className="flex flex-col">
      <TextSection title="competências" heading="Conhecimentos" />

      <div className="w-full grid grid-cols-1 gap-6 md:gap-3 md:grid-cols-4">
        {techs.map((tech, i) => {
          const Icon = getIconComponent(tech.icon);

          return (
            <TechCard
              title={tech.name}
              years={tech.exp}
              techIcon={Icon}
              key={i.toString()}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
      </div>
    </div>
  );
};
