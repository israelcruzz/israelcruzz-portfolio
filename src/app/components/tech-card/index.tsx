"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";
import { IconType } from "react-icons/lib";

interface TechCardProps extends MotionProps {
  title: string;
  years: number;
  techIcon: IconType;
}

export const TechCard = ({
  title,
  years,
  techIcon: TechIcon,
  ...rest
}: TechCardProps) => {
  return (
    <motion.main
      className="w-full p-6 h-[104px] bg-[#4B5563]/40 text-gray-500 text-base font-medium leading-6 flex flex-col gap-2 rounded-lg hover:bg-[#4B5563]/20"
      {...rest}
    >
      <div className="text-gray-500 flex justify-between items-center text-base font-medium leading-6">
        <h3>{title}</h3>
        <TechIcon size={24} />
      </div>

      <span>
        {years} {years === 1 ? "ano" : "anos"} de experiência
      </span>
    </motion.main>
  );
};
