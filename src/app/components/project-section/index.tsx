"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface ProjectSectionProps extends MotionProps {
  children: ReactNode;
}

export const ProjectSection = ({ children, ...rest }: ProjectSectionProps) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="flex relative flex-col items-center justify-center gap-12 px-6 py-36 text-center md:px-[310px] md:py-[146px]"
      {...rest}
    >
      {children}
    </motion.main>
  );
};
