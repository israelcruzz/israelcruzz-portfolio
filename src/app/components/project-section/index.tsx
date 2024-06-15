import { ReactNode } from "react";

interface ProjectSectionProps {
  children: ReactNode;
}

export const ProjectSection = ({ children }: ProjectSectionProps) => {
  return (
    <main className="flex flex-col items-center justify-center gap-12 p-6 text-center md:px-[360px] md:py-[128px]">
      {children}
    </main>
  );
};
