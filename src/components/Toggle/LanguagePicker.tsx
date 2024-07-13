"use client";
import { Button } from "@/components/common/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuCheckboxItem,
} from "@/components/common/dropdown-menu";
import { type Locale } from "@/lib/locales";
import { GlobeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface LanguagePickerProps {
	buttonSize: "sm" | "md" | "lg" | "default";
}

export const LanguagePicker: React.FC<LanguagePickerProps> = ({
	buttonSize,
}) => {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const t = useTranslations("HeaderMenu");

	const languageText = t("LanguagePicker.language");
	const languageEn = t("LanguagePicker.languages.en");
	const languageEs = t("LanguagePicker.languages.es");

	function handleLocaleChange(newLocale: Locale): void {
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
		router.refresh();
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="focus:outline-none">
				<Button
					id="language-toggle"
					type="button"
					size={buttonSize}
					variant="default"
					className="focus:outline-none text-light"
					aria-label={`${languageText}: ${locale === "en" ? languageEn : languageEs}`}
				>
					<GlobeIcon className="size-5" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="center" className="mt-2" role="menu">
				<DropdownMenuLabel>{languageText}</DropdownMenuLabel>
				<DropdownMenuSeparator />

				<DropdownMenuCheckboxItem
					checked={locale === "en"}
					aria-label={`${languageEn} ${locale === "en" ? "selected" : ""}`}
					onClick={() => {
						handleLocaleChange("en");
					}}
				>
					{languageEn}
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={locale === "es"}
					aria-label={`${languageEs} ${locale === "es" ? "selected" : ""}`}
					onClick={() => {
						handleLocaleChange("es");
					}}
				>
					{languageEs}
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
