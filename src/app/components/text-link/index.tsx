import Link from "next/link";
import { ReactNode } from "react";

interface TextLinkProps {
  uri: string;
  children: ReactNode;
}

export const TextLink = ({ uri, children }: TextLinkProps) => {
  return (
    <Link
      href={uri}
      className="text-gray-300 text-sm leading-5 font-medium flex gap-1 items-center hover:text-emerald-400"
    >
      {children}
    </Link>
  );
};
