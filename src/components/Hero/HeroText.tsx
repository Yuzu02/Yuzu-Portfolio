import { useTranslations } from "next-intl";

export default function HeroText(): JSX.Element {
	const t = useTranslations("Hero");
	return (
		<>
			<span className="text-xl">{t("heroTitle")}</span>
			<h1 className="h1 mb-6">
				{t("heroSubTitle")}
				<br /> <span className="text-accent"> {t("heroName")}</span>
			</h1>
			<p className="max-w-[500px] mb-9 dark:text-white/80 text-primary">
				{t("heroPhrase")}
			</p>
		</>
	);
}
