import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../prisma/index";

interface GetIdParams {
  params: {
    id: string;
  };
}

export async function GET(
  req: NextRequest,
  { params: { id } }: GetIdParams
) {
  try {
    const project = await db.project.findUnique({
      where: {
        id: id,
      },
      include: {
        projectSection: true,
        techs: true,
      },
    });

    if (!project) {
      return NextResponse.json({ message: "Project Not Found" }, { status: 404 });
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ message: "Error fetching projects" }, { status: 500 });
  }
}