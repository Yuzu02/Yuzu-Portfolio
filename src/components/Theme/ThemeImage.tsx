"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import lightImage from "public/assets/Roze/photo2.png"; // Size :  497 x 502
import darkImage from "public/assets/Roze/photo5.png"; // Size : 429 x 421

const ThemedImage = () => {
	const { theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const currentTheme = theme === "system" ? systemTheme : theme;

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
			}}
			className="w-[260px] h-[260px] xl:w-[460px] xl:h-[460px] dark:mix-blend-lighten
          absolute rounded-full z-10"
		>
			<div className="relative w-full h-full">
				<Image
					placeholder="blur"
					src={currentTheme === "dark" ? darkImage : lightImage}
					loading="lazy"
					// priority
					quality={80}
					fill
					alt="Yuzu"
					sizes="(max-width: 768px) 260px, 460px"
					className="object-contain rounded-full opacity-80"
				/>
			</div>
		</motion.div>
	);
};

export default ThemedImage;
