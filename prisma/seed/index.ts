import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

interface ITech {
  name: string;
  icon: string;
  exp: number;
}

interface IProject {
    title: string;
    icon: string;
    exp: number;
  }

async function seed() {
  const technologies: ITech[] = [
    { name: "Html", icon: "", exp: 3 },
    { name: "Css", icon: "", exp: 3 },
    { name: "Tailwind", icon: "", exp: 3 },
    { name: "Bootstrap", icon: "", exp: 3 },
    { name: "Javascript", icon: "", exp: 3 },
    { name: "Typescript", icon: "", exp: 3 },
    { name: "ReactJs", icon: "", exp: 3 },
    { name: "NextJs", icon: "", exp: 1 },
    { name: "ReactNative", icon: "", exp: 1 },
    { name: "Expo", icon: "", exp: 1 },
    { name: "NodeJs", icon: "", exp: 1 },
    { name: "Bun", icon: "", exp: 1 },
    { name: "Express", icon: "", exp: 1 },
    { name: "Fastify", icon: "", exp: 1 },
    { name: "NestJs", icon: "", exp: 1 },
    { name: "Elysia", icon: "", exp: 1 },
    { name: "Prisma", icon: "", exp: 1 },
    { name: "MongoDB", icon: "", exp: 1 },
    { name: "Sql", icon: "", exp: 3 },
    { name: "Docker", icon: "", exp: 1 },
    { name: "Vitest", icon: "", exp: 1 },
    { name: "Jest", icon: "", exp: 1 },
    { name: "Kafka", icon: "", exp: 1 },
    { name: "Figma", icon: "", exp: 3 },
    { name: "Git", icon: "", exp: 3 },
    { name: "GitHub", icon: "", exp: 3 },
  ];

  await db.tech.deleteMany();

  const technologiesCreated: ITech[] = [];
  for (let tech of technologies) {
    const techCreated = await db.tech.create({
      data: tech,
    });

    technologiesCreated.push(techCreated);

    console.log(`Tech ${tech.name} Created`);
  }

  const projects = []
}

seed()
  .catch((err) => console.log("Error in Created Seed: " + err))
  .finally(() => console.log("🐳 Seed Created!"));
