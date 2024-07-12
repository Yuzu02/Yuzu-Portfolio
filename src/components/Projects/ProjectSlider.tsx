import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SliderBtns from "../common/SliderBtns";

interface ProjectSliderProps {
	projects: {
		num: string;
		category: string;
		title: string;
		description: string;
		stack: { name: string }[];
		image: string;
		live: string;
		github: string;
	}[];
	onSlideChange: (swiper: { activeIndex: any }) => void;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({
	projects,
	onSlideChange,
}) => {
	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={1}
			className="xl:h-[520px] mb-12"
			onSlideChange={onSlideChange}
		>
			{projects.map((project) => (
				<SwiperSlide key={project.num} className="w-full xl:w-[50%]">
					<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
						{/* Overlay */}
						<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
						{/* Image */}
						<div className="w-full h-full relative">
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover object-center w-full h-full"
							/>
						</div>
					</div>
				</SwiperSlide>
			))}
			{/* Slider Button */}
			<SliderBtns
				containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
				btnStyles="bg-accent hover:bg-accent-hover text-white  dark:text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-xl"
				iconStyles=""
			/>
		</Swiper>
	);
};

export default ProjectSlider;
