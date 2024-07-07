"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { SheetTrigger, Sheet, SheetContent } from "../../common/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { ModeToggle } from "../../Toggle/ThemeModePicker";

export default function MobileNav() {
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
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col rounded-l-3xl">
        <div className="flex justify-start p-4 ml-2">
          <ModeToggle />
        </div>
        {/*Logo*/}
        {/*Default mt-32 mb-40*/}
        <div className="mt-[88px] mb-24 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semi-bold">
              {HeaderMenu("logo")}
              <span className="text-accent">{HeaderMenu("logoPoint")}</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {Links.map((link) => {
            return (
              <Link
                href={link.path}
                key={link.name}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                }
                text-xl capitalize hover-text-accent transition-all dark:font-normal font-semibold`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
