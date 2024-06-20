import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

export async function GET() {
  try {
    const projects = await db.project.findMany({
      include: {
        techs: { select: { name: true } },
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Projects Not Found" },
      { status: 500 }
    );
  }
}
