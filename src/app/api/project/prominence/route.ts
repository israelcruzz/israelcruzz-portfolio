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
      techs: true,
    },
  });

  if (projects.length === 0) {
    NextResponse.json({ message: "Project Not Found" }), { status: 500 };
  }

  NextResponse.json(projects);
}
