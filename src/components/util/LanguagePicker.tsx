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

export const LanguagePicker: React.FC = () => {
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
      <DropdownMenuTrigger asChild>
        <Button type="button" size="md">
          <GlobeIcon className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="mt-2">
        <DropdownMenuLabel>{languageText}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={locale === "en"}
          onClick={() => {
            handleLocaleChange("en");
          }}
        >
          {languageEn}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={locale === "es"}
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
