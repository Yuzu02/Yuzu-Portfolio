"use client";
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

// Data
import { ProjectsData } from "./Data/Projects";

// Components
import SliderBtns from "@/components/Work/SliderBtns";

export default function Work() {
  const [projectsData, setProjectsData] = useState(ProjectsData[0]);

  const handleSlideChange = (swiper: { activeIndex: string | number }) => {
    // get the current project index
    const currentProject = swiper.activeIndex;
    // set the current project data
    setProjectsData(ProjectsData[currentProject as number]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="mih-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%} xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Number */}
              <div className="text-8xl leading-normal font-extrabold text-transparent text-outline">
                {projectsData.num}
              </div>
              {/* Project Category */}
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500
              capitalize"
              >
                {projectsData.category}
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{projectsData.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {projectsData.stack.map((item, index) => (
                  <li key={item.name} className="text-accent text-xl">
                    {item.name}
                    {/* Remove the last comma */}
                    {index !== projectsData.stack.length - 1 && ", "}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={projectsData.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Project Button */}
                <Link href={projectsData.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
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
              {ProjectsData.map((project) => {
                return (
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
                );
              })}
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
