import { HeroSection } from "@/app/components/pages/project/hero-section";
import { ProjectInfoSection } from "@/app/components/pages/project/project-info-section";
import { Metadata } from "next";

interface ProjectRequest {
  params: {
    slug: string;
  };
}

export function generateMetadata({
  params: { slug },
}: ProjectRequest): Metadata {
  return {
    title: slug,
  };
}

export default function Project({ params: { slug } }: ProjectRequest) {
  return (
    <main className="flex flex-col gap-6 md:gap-24">
      <HeroSection />
      <ProjectInfoSection />
    </main>
  );
}
