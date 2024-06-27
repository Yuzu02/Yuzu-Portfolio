"server-only";

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { type AbstractIntlMessages } from "next-intl";
import { Locale, locales } from "../lib/locales";
const messageImports = {
  en: () => import("../locales/en.json"),
  es: () => import("../locales/es.json"),
} as const satisfies Record<
  Locale,
  () => Promise<{
    default: AbstractIntlMessages & { [key: string]: string };
  }>
>;

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale);
}

export default getRequestConfig(async (params) => {
  const baseLocale = new Intl.Locale(params.locale).baseName;
  if (!isValidLocale(baseLocale)) notFound();

  const messages = (await messageImports[baseLocale]()).default;
  return {
    messages,
  };
});
