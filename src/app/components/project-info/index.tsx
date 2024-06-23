"use client";

import Image from "next/image";
import { motion, MotionProps } from "framer-motion";

interface ProjectInfoProps extends MotionProps {
  title: string;
  imageUri: string;
}

export const ProjectInfo = ({ title, imageUri, ...rest }: ProjectInfoProps) => {
  return (
    <motion.div {...rest}>
      <h1 className="text-3xl font-medium text-gray-300 leading-9 text-center mb-4">
        {title}
      </h1>
      <Image
        src={imageUri}
        width={1080}
        height={672}
        alt={`${title} image project`}
        quality={100}
        className="w-full object-cover rounded-lg"
      />
    </motion.div>
  );
};
