"use client";

import { Button } from "@/components/common/button";
import { DropdownMenu } from "@/components/common/dropdown-menu";
import { type Locale } from "@/lib/locales";
import { GlobeIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

export const LanguagePicker: React.FC = () => {
  const locale = useLocale() as Locale;
  const router = useRouter();

  function handleLocaleChange(newLocale: Locale): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button type="button" size="md">
          <GlobeIcon className="size-5" />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end">
        <DropdownMenu.Label>Language</DropdownMenu.Label>
        <DropdownMenu.Separator />

        <DropdownMenu.CheckboxItem
          checked={locale === "en"}
          onClick={() => {
            handleLocaleChange("en");
          }}
        >
          English
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem
          checked={locale === "es"}
          onClick={() => {
            handleLocaleChange("es");
          }}
        >
          Spanish
        </DropdownMenu.CheckboxItem>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
