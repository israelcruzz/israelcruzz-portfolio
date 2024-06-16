import { HTMLAttributes, ReactNode } from "react";

interface ProjectSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ProjectSection = ({ children, ...rest }: ProjectSectionProps) => {
  return (
    <main
      className="flex relative flex-col items-center justify-center gap-12 px-6 py-36 text-center md:px-[310px] md:py-[146px]"
      {...rest}
    >
      {children}
    </main>
  );
};
