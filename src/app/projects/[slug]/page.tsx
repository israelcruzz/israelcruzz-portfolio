import { HeroSection } from "@/app/components/pages/project/hero-section";
import { Metadata } from "next";
import Image from "next/image";

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

      <div className="container flex flex-col gap-6">
        <h1 className="text-3xl font-medium text-gray-300 leading-9 text-center">Login</h1>
        <Image
          src="/images/example.png"
          width={1080}
          height={672}
          alt=""
          quality={100}
          className="w-full object-cover rounded-lg"
        />
      </div>
    </main>
  );
}
