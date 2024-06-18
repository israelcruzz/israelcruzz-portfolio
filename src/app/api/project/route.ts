import { NextResponse } from "next/server";
import { db } from "../../../../prisma/seed";

export async function GET() {
  const projects = await db.project.findMany({
    include: {
      techs: {
        select: { name: true },
      },
    },
  });

  if (projects.length === 0) {
    NextResponse.json({ message: "Projects Not Found" }), { status: 500 };
  }

  NextResponse.json(projects);
}
