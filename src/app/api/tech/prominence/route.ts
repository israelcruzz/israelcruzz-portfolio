import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../prisma/seed";

export async function GET(req: NextRequest, res: NextResponse) {
  const techNamesSearch = [
    "Javascript",
    "Typescript",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "ReactNative",
  ];

  const techs = await db.tech.findMany({
    where: {
      name: {
        in: techNamesSearch,
      },
    },
  });

  if (techs.length === 0) {
    NextResponse.json({ message: "Techs Not Found" }), { status: 500 };
  }

  NextResponse.json(techs);
}
