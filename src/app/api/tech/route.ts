import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../prisma/seed";

export async function GET(req: NextRequest, res: NextResponse) {
  const techs = await db.tech.findMany();

  if (!techs) {
    NextResponse.json({ message: "Techs Not Found" }), { status: 500 };
  }

  NextResponse.json(techs);
}
