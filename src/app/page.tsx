import { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "./components/pages/home/hero-section";
import { TechCardsSection } from "./components/pages/home/tech-cards-section";

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <main className="container flex flex-col gap-6 md:gap-24">
      <HeroSection />
      <TechCardsSection />
    </main>
  );
}
