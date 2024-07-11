import { useTranslations } from "next-intl";
import { LanguagePicker } from "../Toggle/LanguagePicker";
import Link from "next/link";
// import { Button } from "../common/button";

// Components
import Nav from "./Nav/Nav";
import MobileNav from "./Nav/MobileNav";

import { ModeToggle } from "../Toggle/ThemeModePicker";

/* Header Component Standby  

          <Link href={"/contact"}>
              <Button className="font-semibold" size="default">
                {header("hireMe")}
              </Button>
            </Link>

*/

export default function Header() {
  const header = useTranslations("Header");

  return (
    // className="py-4 xl:py-6 dark:text-white text-primary"
    <header className="py-4 xl:py-6 dark:text-white text-primary">
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
          <div className="xl:flex gap-2 items-center font-semibold">
            <LanguagePicker buttonSize="default" />
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden flex flex-row space-x-4">
          <LanguagePicker buttonSize="sm" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
