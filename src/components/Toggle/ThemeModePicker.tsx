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
import { Toaster, toast } from "sonner";

export function ModeToggle() {
	const { setTheme } = useTheme();
	// Translations
	const t = useTranslations("HeaderMenu");
	const toggleThemeText = t("Theme.toggleTheme");
	const lightThemeText = t("Theme.light");
	const darkThemeText = t("Theme.dark");
	const systemThemeText = t("Theme.system");
	const { theme } = useTheme() as {
		theme: "light" | "dark" | "system" | undefined;
	};
	const t2 = useTranslations("Toaster");
	const toasteMessages = {
		themeChangeToLightMode: t2("Theme.light"),
		themeChangeToDarkMode: t2("Theme.dark"),
		themeChangeToSystemMode: t2("Theme.system"),
	};

	function handleThemeCookieChange(newTheme: string): void {
		document.cookie = `NEXT_THEME=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
	}

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger
					asChild
					className="focus:outline-none outline-none"
					aria-label={toggleThemeText}
				>
					<Button
						id="theme-toggle"
						variant="themeToggle"
						size="sm"
						className="focus:outline-none outline-none"
						aria-label={toggleThemeText}
					>
						<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">{toggleThemeText}</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="center"
					className="mt-1 lg:mt-2"
					role="menu"
				>
					<div className="hidden sm:hidden md:hidden lg:block xl:block">
						<DropdownMenuLabel>{toggleThemeText}</DropdownMenuLabel>
						<DropdownMenuSeparator />
					</div>
					<DropdownMenuCheckboxItem
						aria-label={`${lightThemeText} ${theme === "light" ? "selected" : ""}`}
						onClick={() => {
							setTheme("light");
							handleThemeCookieChange("light");
							toast.success(toasteMessages.themeChangeToLightMode, {
								duration: 2500,
							});
						}}
						checked={theme === "light"}
					>
						{lightThemeText}
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						aria-label={`${darkThemeText} ${theme === "dark" ? "selected" : ""}`}
						onClick={() => {
							setTheme("dark");
							handleThemeCookieChange("light");
							toast.success(toasteMessages.themeChangeToDarkMode, {
								duration: 2500,
							});
						}}
						checked={theme === "dark"}
					>
						{darkThemeText}
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						onClick={() => {
							setTheme("system");
							handleThemeCookieChange("");
							toast.success(toasteMessages.themeChangeToSystemMode, {
								duration: 2500,
							});
						}}
						checked={theme === "system"}
						aria-label={`${systemThemeText} ${theme === "system" ? "selected" : ""}`}
					>
						{systemThemeText}
					</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<div className="fixed top-4 right-4 z-50">
				<Toaster theme={theme} visibleToasts={3} duration={2500} />
			</div>
		</>
	);
}
