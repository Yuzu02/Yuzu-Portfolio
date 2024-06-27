import { useTranslations } from "next-intl";
import { LanguagePicker } from "../util/LanguagePicker";
import Link from "next/link";
import { Button } from "../common/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  const header = useTranslations("Header");

  return (
    <header className="py-4 xl:py-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"./"}>
          <h1 className="text-4xl font-semi-bold">
            {header("logo")}
            <span className="text-accent">{header("logoPoint")}</span>
          </h1>
        </Link>
        {/* Desktop Nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button className="font-semibold">{header("hireMe")}</Button>
          </Link>
          <div className="justify-center items-center font-semibold">
            <LanguagePicker />
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden flex flex-row space-x-4">
          <LanguagePicker />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
