import { ReactNode } from "react";

interface ProjectSectionProps {
  children: ReactNode;
}

export const ProjectSection = ({ children }: ProjectSectionProps) => {
  return (
    <main className="flex flex-col items-center justify-center gap-12 px-6 py-36 text-center md:px-[360px] md:py-[146px]">
      {children}
    </main>
  );
};
