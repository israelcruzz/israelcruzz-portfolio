import { HeroSection } from "@/app/components/pages/project/hero-section";

interface ProjectRequest {
  params: {
    slug: string;
  };
}

export default function Project({ params: { slug } }: ProjectRequest) {
  return (
    <main className="flex flex-col gap-6 md:gap-24">
      <HeroSection />
    </main>
  );
}
