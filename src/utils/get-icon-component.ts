import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaQuestionCircle,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpo,
  SiBun,
  SiExpress,
  SiFastify,
  SiNestjs,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiVitest,
  SiJest,
  SiApachekafka,
} from "react-icons/si";

const iconMap: { [key: string]: IconType } = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaBootstrap: FaBootstrap,
  FaJsSquare: FaJsSquare,
  FaReact: FaReact,
  SiTailwindcss: SiTailwindcss,
  SiTypescript: SiTypescript,
  SiNextdotjs: SiNextdotjs,
  FaNodeJs: FaNodeJs,
  SiExpo: SiExpo,
  SiBun: SiBun,
  SiExpress: SiExpress,
  SiFastify: SiFastify,
  SiNestjs: SiNestjs,
  SiPrisma: SiPrisma,
  SiMongodb: SiMongodb,
  SiMysql: SiMysql,
  FaDocker: FaDocker,
  SiVitest: SiVitest,
  SiJest: SiJest,
  SiApachekafka: SiApachekafka,
  FaFigma: FaFigma,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  FaPhp: FaPhp,
};

export const getIconComponent = (iconName: string) => {
  return iconMap[iconName] || FaQuestionCircle;
};
