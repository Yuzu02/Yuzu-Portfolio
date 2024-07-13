// Components
import HeroText from "@/components/Hero/HeroText";
import Social from "@/components/Hero/Social";
import Photo from "@/components/Hero/Photo";
import Stats from "@/components/Hero/Stats";
import DownloadCV from "@/components/Hero/DownloadCV";

export default function Home() {
	return (
		<section className="h-full">
			<div className="container h-full">
				<div
					className="flex flex-col xl:flex-row items-center justify-between xl:pt-8
        xl:pb-2"
				>
					{/* Text */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<HeroText />
						{/* btn & socials*/}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<DownloadCV />
							<div className="mb-8 xl:mb-0">
								<Social
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-white dark:hover:text-primary hover:transition-colors duration-500"
								/>
							</div>
						</div>
					</div>
					{/* Photo*/}
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
			{/* Stats */}
			<Stats />
		</section>
	);
}
