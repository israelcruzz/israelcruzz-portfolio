import { TechCard } from "@/app/components/tech-card";
import { TextSection } from "@/app/components/text-section";
import { RiNextjsFill } from "react-icons/ri";
import { ITech } from "../../../../../../prisma/seed";

interface TechCardsSectionProps {
  techs: ITech[];
}

export const TechCardsSection = ({ techs }: TechCardsSectionProps) => {
  return (
    <div className="flex flex-col">
      <TextSection title="competências" heading="Conhecimentos" />

      <div className="w-full grid grid-cols-1 gap-6 md:gap-3 md:grid-cols-4">
        {techs.map((tech, i) => {
          return (
            <TechCard
              title={tech.name}
              years={tech.exp}
              techIcon={RiNextjsFill}
              key={i.toString()}
            />
          );
        })}
      </div>
    </div>
  );
};
