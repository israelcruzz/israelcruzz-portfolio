import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../prisma";

export async function GET(req: NextRequest) {
  try {
    const techs = await db.tech.findMany();

    if (!techs) {
      return NextResponse.json({ message: "Techs Not Found" }, { status: 404 });
    }

    return NextResponse.json(techs, { status: 200 });
  } catch (error) {
    console.error("Error fetching Techs:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
