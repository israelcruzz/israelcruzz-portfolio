"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();

  return (
    <motion.header
      className="w-full flex justify-between items-center container"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/">
        <Image
          src="/images/israelcruzz-logo.png"
          alt="Logo to Israel Cruz"
          width={56}
          height={56}
          quality={100}
        />
      </Link>

      <section className="flex gap-6">
        <Link href="/" className="flex gap-1">
          <span className="text-emerald-400">#</span>
          <h1
            className={`${
              path === "/" ? "text-white" : "text-gray-400"
            } font-medium text-base hover:text-white`}
          >
            Home
          </h1>
        </Link>

        <Link href="/projects" className="flex gap-1">
          <span className="text-emerald-400">#</span>
          <h1
            className={`${
              path === "/projects" ? "text-white" : "text-gray-400"
            } font-medium text-base hover:text-white`}
          >
            Projetos
          </h1>
        </Link>
      </section>
    </motion.header>
  );
};
