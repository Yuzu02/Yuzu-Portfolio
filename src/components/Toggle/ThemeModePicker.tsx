"use client";

import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/common/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();
  // Translations
  const t = useTranslations("HeaderMenu");
  const toggleThemeText = t("Theme.toggleTheme");
  const lightThemeText = t("Theme.light");
  const darkThemeText = t("Theme.dark");
  const systemThemeText = t("Theme.system");
  const { theme } = useTheme();

  // Future implementation of the theme toggle button
  // <DropdownMenuLabel>{toggleThemeText}</DropdownMenuLabel>
  // <DropdownMenuSeparator />

  function handleThemeCookieChange(newTheme: string): void {
    document.cookie = `NEXT_THEME=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="focus:outline-none outline-none">
        <Button
          variant="themeToggle"
          size="sm"
          className="focus:outline-none outline-none"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{toggleThemeText}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="mt-1 lg:mt-2">
        <div className="hidden sm:hidden md:hidden lg:block xl:block">
          <DropdownMenuLabel>{toggleThemeText}</DropdownMenuLabel>
          <DropdownMenuSeparator />
        </div>
        <DropdownMenuCheckboxItem
          onClick={() => {
            setTheme("light");
            handleThemeCookieChange("light");
          }}
          checked={theme === "light"}
          className="focus:outline-none"
        >
          {lightThemeText}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => {
            setTheme("dark");
            handleThemeCookieChange("light");
          }}
          checked={theme === "dark"}
        >
          {darkThemeText}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => setTheme("system")}
          checked={theme === "system"}
        >
          {systemThemeText}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
