"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";

// Components
import ProjectInfo from "@/components/Projects/ProjectInfo";
import ProjectSlider from "@/components/Projects/ProjectSlider";

export default function Work() {
	// Translation
	const t = useTranslations("Projects");
	// Static Text
	const Live = t("liveProject");
	const Github = t("githubRepo");
	// Projects Data
	const ProjectsData = [
		{
			num: t("Project1.num"),
			category: t("Project1.category"),
			title: t("Project1.title"),
			description: t("Project1.description"),
			stack: [
				{ name: t("Project1.stack.1.name") },
				{ name: t("Project1.stack.2.name") },
				{ name: t("Project1.stack.3.name") },
				{ name: t("Project1.stack.4.name") },
			],
			image: t("Project1.image"),
			live: t("Project1.live"),
			github: t("Project1.github"),
		},

		{
			num: t("Project2.num"),
			category: t("Project2.category"),
			title: t("Project2.title"),
			description: t("Project2.description"),
			stack: [
				{ name: t("Project2.stack.1.name") },
				{ name: t("Project2.stack.2.name") },
				{ name: t("Project2.stack.3.name") },
				{ name: t("Project2.stack.4.name") },
			],
			image: t("Project2.image"),
			live: t("Project2.live"),
			github: t("Project2.github"),
		},

		{
			num: t("Project3.num"),
			category: t("Project3.category"),
			title: t("Project3.title"),
			description: t("Project3.description"),
			stack: [
				{ name: t("Project3.stack.1.name") },
				{ name: t("Project3.stack.2.name") },
				{ name: t("Project3.stack.3.name") },
				{ name: t("Project3.stack.4.name") },
			],
			image: t("Project3.image"),
			live: t("Project3.live"),
			github: t("Project3.github"),
		},
		{
			num: t("Project4.num"),
			category: t("Project4.category"),
			title: t("Project4.title"),
			description: t("Project4.description"),
			stack: [
				{ name: t("Project4.stack.1.name") },
				{ name: t("Project4.stack.2.name") },
				{ name: t("Project4.stack.3.name") },
				{ name: t("Project4.stack.4.name") },
			],
			image: t("Project4.image"),
			live: t("Project4.live"),
			github: t("Project4.github"),
		}
	];

	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

	const handleSlideChange = (swiper: { activeIndex: any }) => {
		// get the current project index
		const currentProjectIndex = swiper.activeIndex;
		// set the current project index
		setCurrentProjectIndex(currentProjectIndex);
	};

	const currentProject = ProjectsData[currentProjectIndex];

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-5"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							{/* Project Info */}
							<ProjectInfo
								project={currentProject}
								liveText={Live}
								githubText={Github}
							/>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						{/* Project Slider */}
						<ProjectSlider
							projects={ProjectsData}
							onSlideChange={handleSlideChange}
						/>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
