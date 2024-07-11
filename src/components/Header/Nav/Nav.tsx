"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const HeaderMenu = useTranslations("HeaderMenu");
  const Links = [
    {
      name: HeaderMenu("home"),
      path: "/",
    },
    {
      name: HeaderMenu("services"),
      path: "/services",
    },
    {
      name: HeaderMenu("resume"),
      path: "/resume",
    },
    {
      name: HeaderMenu("work"),
      path: "/work",
    },
    {
      name: HeaderMenu("contact"),
      path: "/contact",
    },
  ];

  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {Links.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.name}
            className={`${
              link.path === pathname &&
              "dark:text-accent  text-primary border-b-2 border-accent"
            }
            capitalize dark:font-medium font-bold hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
