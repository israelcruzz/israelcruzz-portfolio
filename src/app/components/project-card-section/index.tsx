"use client";

import Image from "next/image";
import { TechBadge } from "../tech-badge";
import { TextLink } from "../text-link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MotionProps, motion } from "framer-motion";

interface ProjectCardSectionProps extends MotionProps {
  title: string;
  description: string;
  techs: string[];
  imageUri: string;
  uri: string;
}

export const ProjectCardSection = ({
  title,
  description,
  techs,
  imageUri,
  uri,
  ...rest
}: ProjectCardSectionProps) => {
  return (
    <motion.main className="w-full flex flex-col gap-6 md:flex-row" {...rest}>
      <section className="w-full md:w-1/2">
        <Image
          src={imageUri}
          width={420}
          height={304}
          quality={100}
          alt="Project Image"
          className="rounded-lg w-full h-auto object-cover"
        />
      </section>

      <section className="flex flex-col justify-between w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg leading-7 font-medium text-gray-50">
            {title}
          </h3>

          <p className="text-base leading-6 font-normal text-gray-400">
            {description}
          </p>

          <div className="w-full md:w-[400px] grid grid-cols-2 gap-3 md:grid-cols-4">
            {techs.map((tech, i) => (
              <TechBadge name={tech} key={i.toString()} />
            ))}
          </div>
        </div>

        <div className="flex items-center mt-8 md:mt-0">
          <TextLink uri={uri}>
            <span>Ver projeto</span>
            <IoIosArrowRoundForward size={24} />
          </TextLink>
        </div>
      </section>
    </motion.main>
  );
};
