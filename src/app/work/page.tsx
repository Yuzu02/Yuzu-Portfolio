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

export default function Work() {
  const [projectsData, setProjectsData] = useState(ProjectsData[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mih-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%} xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
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
              <ul>
                {projectsData.stack.map((item, index) => (
                  <li key={item.name} className="text-accent text-xl">
                    {item.name}
                    {/* Remove the last comma */}
                    {index !== projectsData.stack.length - 1 && ", "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full xl:w-[50%}">slider</div>
        </div>
      </div>
    </motion.section>
  );
}
