"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();

  return (
    <header className="w-full flex justify-between items-center container">
      <Image
        src="/images/israelcruzz-logo.png"
        alt="Logo to Israel Cruz"
        width={56}
        height={56}
        quality={100}
      />

      <section className="flex gap-6">
        <Link href="/" className="flex gap-1">
          <span className="text-emerald-400">#</span>
          <h1 className={`${path === '/' ? 'text-white' : 'text-gray-400'} font-medium text-base`}>Home</h1>
        </Link>

        <Link href="/projects" className="flex gap-1">
          <span className="text-emerald-400">#</span>
          <h1 className={`${path === '/projects' ? 'text-white' : 'text-gray-400'} font-medium text-base`}>Projetos</h1>
        </Link>
      </section>
    </header>
  );
};
