"use client";

import { motion } from "framer-motion";
import ThemedImage from "../Theme/ThemeImage";

export default function Photo() {
	return (
		<div className="w-full h-full relative">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: "easeIn" },
				}}
				className="flex justify-center items-center w-full h-full"
			>
				{/*Image*/}
				{/* w-[298px] default size, w-[483px] on xl screens 
            h-[298px] default size, h-[483px] on xl screens 
        */}
				<ThemedImage />
				{/* Circle*/}
				<motion.svg
					className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
					fill="transparent"
					viewBox="0 0 506 506"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.circle
						cx="253"
						cy="253"
						r="250"
						stroke="#6f00ff"
						strokeWidth="5"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ strokeDasharray: "24 10 0 0" }}
						animate={{
							strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
							rotate: [120, 360],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					></motion.circle>
				</motion.svg>
			</motion.div>
		</div>
	);
}
