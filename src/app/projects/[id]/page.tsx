import ProjectWithDate from "@/app/components/pages/project/project-with-date/project-with-date";
import { db } from "../../../../prisma";
import { Metadata } from "next";

interface ProjectRequest {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: ProjectRequest): Promise<Metadata> {
  const project = await db.project.findUnique({ where: {
    id
  } })

  return {
    title: project?.title,
  };
}

export default function Project({ params: { id } }: ProjectRequest) {
  return <ProjectWithDate id={id} />;
}
