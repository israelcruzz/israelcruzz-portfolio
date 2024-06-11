import { TechCard } from "@/app/components/tech-card";
import { TextSection } from "@/app/components/text-section";
import { RiNextjsFill } from "react-icons/ri";

export const TechCardsSection = () => {
  return (
    <div className="flex flex-col">
      <TextSection title="competências" heading="Conhecimentos" />

      <div className="w-full grid grid-cols-1 gap-6 md:gap-3 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => {
          return (
            <TechCard
              title="Next"
              years={3}
              techIcon={RiNextjsFill}
              key={i.toString()}
            />
          );
        })}
      </div>
    </div>
  );
};
