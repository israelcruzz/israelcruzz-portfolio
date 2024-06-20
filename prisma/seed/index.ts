import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

export interface ITech {
  id?: string;
  name: string;
  icon: string;
  exp: number;
}

export interface IProject {
  id?: string;
  title: string;
  description: string;
  repoUri: string;
  deployUri: string;
  thumbUri: string;
  techs?: any;
}

export interface IProjectFront {
  id?: string;
  title: string;
  description: string;
  repoUri: string;
  deployUri: string;
  thumbUri: string;
  techs: ProjectTechs[];
  projectSection: IProjectSection[];
}

interface ProjectTechs {
  name: string;
}

export interface IProjectSection {
  id?: string;
  name: string;
  imageUri: string;
  projectId: string;
}
