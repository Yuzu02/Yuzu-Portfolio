"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function SliderBtns({
	containerStyles,
	btnStyles,
	iconStyles,
}: Readonly<{
	containerStyles: string;
	btnStyles: string;
	iconStyles: string;
}>) {
	const swiper = useSwiper();

	return (
		<div className={containerStyles}>
			<button className={btnStyles}>
				<PiCaretLeftBold
					className={iconStyles}
					aria-label="Previous Slide"
					onClick={() => swiper.slidePrev()}
				/>
			</button>
			<button className={btnStyles}>
				<PiCaretRightBold
					className={iconStyles}
					aria-label="Next Slide"
					onClick={() => swiper.slideNext()}
				/>
			</button>
		</div>
	);
}
