"use client";

import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/common/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlineToggle" size="md">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{toggleThemeText}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="mt-1">
        <DropdownMenuCheckboxItem
          onClick={() => setTheme("light")}
          checked={theme === "light"}
        >
          {lightThemeText}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => setTheme("dark")}
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
