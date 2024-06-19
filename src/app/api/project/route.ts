import { NextResponse } from "next/server";
import { db } from "../../../../prisma/seed";

export async function GET() {
  const projects = await db.project.findMany({
    include: {
      projectSection: true,
      techs: true
    },
  });

  if (!projects) {
    return NextResponse.json({ message: "Projects Not Found" }), { status: 500 };
  }

  return NextResponse.json(projects);
}
