import { NextResponse } from "next/server";
import { db } from "../../../../../prisma/seed";

export async function GET() {
  const filterProjectsPerName: string[] = ["DuoFinders", "Ai Train App"];

  const projects = await db.project.findMany({
    where: {
      title: {
        in: filterProjectsPerName,
      },
    },
    include: {
      techs: { select: { name: true } },
    },
  });

  if (!projects.length) {
    return NextResponse.json({ message: "Project Not Found" }), { status: 500 };
  }

  return NextResponse.json(projects);
}
