import { useTranslations } from "next-intl";
import { IoPersonCircle } from "react-icons/io5";

const AboutTab = () => {
	const AboutData = useTranslations("About");
	const AboutInfo = useTranslations("AboutInfo");
	const AboutListData = [
		"Name",
		"Phone",
		"Experience",
		"Email",
		"Telegram",
		"Nationality",
		"Languages",
		"Freelance",
	] as const;

	return (
		<div className="flex flex-col gap-[30px]">
			<h3 className="text-4xl font-bold">{AboutData("title")}</h3>
			<p className="max-2[600px] dark:text-white/60 text-primary/70 mx-auto xl:mx-0">
				{AboutData("description")}
			</p>
			<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
				<div className="xl:hidden mb-5">
					<IoPersonCircle className="text-8xl dark:text-white mx-auto hover:text-accent transition-all duration-500 text-gray-800" />
				</div>
				{AboutListData.map((item) => (
					<li
						key={AboutInfo(`${item}.fieldName`)}
						className="flex items-center xl:justify-start gap-4"
					>
						<span className="text-accent">•</span>
						<span className="dark:text-white/60 text-primary/60">
							{AboutInfo(`${item}.fieldName`)}
						</span>
						<span className="text-base">
							{AboutInfo(`${item}.fieldValue`)}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AboutTab;
