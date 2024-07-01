import { NextResponse } from "next/server";
import { db } from "../../../../../prisma";

export async function GET() {
  const filterProjectsPerName: string[] = ["DuoFinders", "Ai Train App"];

  try {
    const projects = await db.project.findMany({
      where: {
        title: { in: filterProjectsPerName },
      },
      include: {
        techs: { select: { name: true } },
      },
    });

    if (!projects.length) {
      return NextResponse.json(
        { message: "Project Not Found" },
        { status: 500 }
      );
    }

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error },
      { status: 500 }
    );
  }
}
