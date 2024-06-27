"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/common/tooltip";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";

// Components
import SliderBtns from "@/components/common/SliderBtns";

export default function Work() {
  // Translation
  const t = useTranslations("Projects");
  // Static Test
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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Number */}
              <div className="text-8xl leading-normal font-extrabold text-transparent text-outline">
                {currentProject.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {currentProject.category}
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{currentProject.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {currentProject.stack.map((item, index) => (
                  <li key={item.name} className="text-accent text-xl">
                    {item.name}
                    {index !== currentProject.stack.length - 1 && ", "}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={currentProject.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{Live}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Project Button */}
                <Link href={currentProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{Github}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {ProjectsData.map((project, index) => (
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
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-xl"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
