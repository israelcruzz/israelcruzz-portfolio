import { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "./components/pages/home/hero-section";

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <main className="container">
      <HeroSection />
    </main>
  );
}
