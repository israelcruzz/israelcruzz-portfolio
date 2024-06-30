import { Metadata } from "next";
import { ProjectDate } from "../components/pages/project/project-date/project-date";

export const metadata: Metadata = {
  title: "Projetos",
};

export default async function Projects() {
  return <ProjectDate />;
}
