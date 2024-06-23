"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {Links.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.name}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            }
          capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
