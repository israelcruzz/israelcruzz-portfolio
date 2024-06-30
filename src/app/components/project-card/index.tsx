"use client";

import Image from "next/image";
import Link from "next/link";
import { IProjectFront } from "../../../../prisma";
import { motion, MotionProps } from "framer-motion";

interface ProjectCardProps extends MotionProps {
  project: IProjectFront;
}

export const ProjectCard = ({ project, ...rest }: ProjectCardProps) => {
  return (
    <motion.main {...rest}>
      <Link
        href={`/projects/${project.id}`}
        className="w-full h-[416px] bg-gray-800 opacity-70 hover:opacity-100 rounded-lg flex flex-col overflow-hidden transition-all group hover:outline hover:outline-emerald-500"
      >
        <div className="w-full min-h-[192px]">
          <Image
            src={project.thumbUri}
            className="object-cover w-full h-full group-hover:scale-110"
            alt=""
            quality={100}
            width={350}
            height={192}
          />
        </div>

        <div className="w-full h-full p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-medium text-gray-50 leading-6">
              {project.title}
            </h3>
            <p className="text-base font-normal text-gray-400 leading-6 line-clamp-3">
              {project.description}
            </p>
          </div>

          <span className="text-gray-300 text-sm font-medium leading-5">
            {project.techs && project.techs.map((proj) => proj.name).join(", ")}
          </span>
        </div>
      </Link>
    </motion.main>
  );
};
