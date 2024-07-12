import { useTranslations } from "next-intl";
import { ScrollArea } from "@/components/common/scroll-area";

const ExperienceTab = () => {
	const ExperienceData = useTranslations("Experience");
	const ExperienceList = useTranslations("ExperienceList");
	const ExperienceListData = ["Experience1", "Experience2"] as const;

	return (
		<div className="flex flex-col gap-[30px] text-center xl:text-left">
			<h3 className="text-4xl font-bold">{ExperienceData("title")}</h3>
			<p className="max-w-[600px] dark:text-white/60 text-primary/70 mx-auto xl:mx-0">
				{ExperienceData("description")}
			</p>
			<ScrollArea className="h-[400px]">
				<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
					{ExperienceListData.map((item) => (
						<li
							key={ExperienceList(`${item}.number`)}
							className="dark:bg-scrollArea bg-gray-200/80 h-[184px] px-6 py-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
						>
							<span className="text-accent">
								{ExperienceList(`${item}.date`)}
							</span>
							<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
								{ExperienceList(`${item}.position`)}
							</h3>
							<div className="flex items-center gap-3">
								<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
								<p className="dark:text-white/60 text-primary/70">
									{ExperienceList(`${item}.company`)}
								</p>
							</div>
						</li>
					))}
				</ul>
			</ScrollArea>
		</div>
	);
};

export default ExperienceTab;
