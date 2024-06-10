import React, { ReactNode } from "react";

interface TechCardProps {
  title: string;
  years: number;
  techIcon: React.ComponentType;
}

export const TechCard = ({
  title,
  years,
  techIcon: TechIcon,
}: TechCardProps) => {
  return (
    <main className="p-6 h-[104px] bg-[#4B5563]/40 text-gray-500 text-base font-medium leading-6 flex flex-col gap-2">
      <div className="text-gray-500 flex justify-between items-center text-base font-medium leading-6">
        <h3>{title}</h3>
        <TechIcon />
      </div>

      <span>{years} anos de experiência</span>
    </main>
  );
};
