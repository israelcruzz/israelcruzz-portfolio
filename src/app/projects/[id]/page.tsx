import axios from "axios";
import { IProjectFront } from "../../../../prisma/seed";
import { HeroSection } from "../../components/pages/project/hero-section";
import { ProjectInfoSection } from "../../components/pages/project/project-info-section";
import { Metadata } from "next";

interface ProjectRequest {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: ProjectRequest): Promise<Metadata> {
  const projectDate: IProjectFront = await fetchDateProject(id);

  return {
    title: projectDate.title,
  };
}

const fetchDateProject = async (id: string) => {
  try {
    const date = await axios.get(process.env.URL + `/api/project/${id}`);

    if (!date) {
      throw new Error("Failed Request for Project");
    }

    console.table(date.data);

    return date.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Project({ params: { id } }: ProjectRequest) {
  const projectDate: IProjectFront = await fetchDateProject(id);

  return (
    <main className="flex flex-col gap-6 md:gap-24">
      <HeroSection project={projectDate} />
      <ProjectInfoSection project={projectDate} />
    </main>
  );
}
