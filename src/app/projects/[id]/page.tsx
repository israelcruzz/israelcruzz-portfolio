import { IProject } from "../../../../prisma/seed";
import { HeroSection } from "../../components/pages/project/hero-section";
import { ProjectInfoSection } from "../../components/pages/project/project-info-section";
import { Metadata } from "next";

interface ProjectRequest {
  params: {
    id: string;
  };
}

export function generateMetadata({ params: { id } }: ProjectRequest): Metadata {
  return {
    title: id,
  };
}

const fetchDateProject = async (id: string) => {
  try {
    const date = await fetch(process.env.URL + `/api/project/${id}`);

    if (!date.ok) {
      throw new Error("Failed Request for Project");
    }

    const response = await date.json();
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Project({ params: { id } }: ProjectRequest) {
  const projectDate: IProject = await fetchDateProject(id);

  return (
    <main className="flex flex-col gap-6 md:gap-24">
      <HeroSection project={projectDate} />
      <ProjectInfoSection />
    </main>
  );
}
