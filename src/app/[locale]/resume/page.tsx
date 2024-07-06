"use client";

// Translation
import { useTranslations } from "next-intl";

// Next-Theme
import { useTheme } from "next-themes";

// Icons
import { FaHtml5, FaCss3, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { IoPersonCircle } from "react-icons/io5";
import PythonLogo from "@/components/extra/PythonLogo";

// Components
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/common/tooltip";

import { ScrollArea } from "@/components/common/scroll-area";

// Extra
import { motion } from "framer-motion";

// Interface to define the structure of the SkillItem data
interface SkillItem {
  icon: React.JSX.Element;
  name: string;
}

const iconColors = {
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  TailwindCSS: "#06B6D4",
  TypeScript: "#3178C6",
  React: "#61DAFB",
  NextJS: "#000000",
  Python: {
    primary: "#3776AB",
    secondary: "#FFD43B",
  },
  Git: "#F05032",
};

export default function Resume() {
  // Translation Hook
  const Resume = useTranslations("Resume");

  // Theme Icons
  const { resolvedTheme } = useTheme();

  const skills: SkillItem[] = [
    {
      icon: (
        <FaHtml5
          color={resolvedTheme === "dark" ? undefined : iconColors.HTML5}
        />
      ),
      name: "HTML5",
    },
    {
      icon: (
        <FaCss3
          color={resolvedTheme === "dark" ? undefined : iconColors.CSS3}
        />
      ),
      name: "CSS3",
    },
    {
      icon: (
        <SiTailwindcss
          color={resolvedTheme === "dark" ? undefined : iconColors.TailwindCSS}
        />
      ),
      name: "Tailwind CSS",
    },
    {
      icon: (
        <SiTypescript
          color={resolvedTheme === "dark" ? undefined : iconColors.TypeScript}
        />
      ),
      name: "TypeScript",
    },
    {
      icon: (
        <FaReact
          color={resolvedTheme === "dark" ? undefined : iconColors.React}
        />
      ),
      name: "React.js",
    },
    {
      icon: (
        <SiNextdotjs
          color={resolvedTheme === "dark" ? undefined : iconColors.NextJS}
        />
      ),
      name: "Next.js",
    },
    {
      icon: resolvedTheme === "dark" ? <FaPython /> : <PythonLogo />,
      name: "Python",
    },
    {
      icon: (
        <FaGitAlt
          color={resolvedTheme === "dark" ? undefined : iconColors.Git}
        />
      ),
      name: "Git",
    },
  ];

  // Experience
  const ExperienceData = useTranslations("Experience");
  const ExperienceList = useTranslations("ExperienceList");
  const ExperienceListData = ["Experience1", "Experience2"] as const;
  // Education
  const EducationData = useTranslations("Education");
  const EducationList = useTranslations("EducationList");
  const EducationListData = ["Education1"] as const;
  // Skills
  const SkillsData = useTranslations("Skill");
  // About
  const AboutData = useTranslations("About");
  const AboutInfo = useTranslations("AboutInfo");
  const AboutListData = [
    "Name",
    "Phone",
    "Experience",
    "E-mail",
    "Telegram",
    "Nationality",
    "Languages",
    "Freelance",
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tabs */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{Resume("Experience")}</TabsTrigger>
            <TabsTrigger value="education">{Resume("Education")}</TabsTrigger>
            <TabsTrigger value="skills">{Resume("Skills")}</TabsTrigger>
            <TabsTrigger value="about">{Resume("About")}</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {ExperienceData("title")}
                </h3>
                <p className="max-w-[600px] dark:text-white/60 text-primary/70 mx-auto xl:mx-0">
                  {ExperienceData("description")}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {ExperienceListData.map((item) => {
                      return (
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
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="dark:text-white/60 text-primary/70">
                              {ExperienceList(`${item}.company`)}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{EducationData("title")}</h3>
                <p className="max-w-[600px] dark:text-white/60 text-primary/70 mx-auto xl:mx-0">
                  {EducationData("description")}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {EducationListData.map((item) => {
                      return (
                        <li
                          key={EducationList(`${item}.number`)}
                          className="dark:bg-scrollArea bg-gray-200/80 h-[184px] px-6 py-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {EducationList(`${item}.date`)}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {EducationList(`${item}.degree`)}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="dark:text-white/60 text-primary/70">
                              {EducationList(`${item}.institution`)}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] items-center xl:text-left">
                  <h3 className="text-4xl font-bold">{SkillsData("title")}</h3>
                  <p className="max-w-[600px] dark:text-white/60 text-primary/70 mx-auto xl:mx-0 text-center xl:text-left">
                    {SkillsData("description")}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.map((skill) => {
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 dark:text-white/60"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] dark:bg-scrollArea bg-gray-200/80 rounded-xl flex justify-center items-center group">
                              <div className="text-6xl dark:group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{AboutData("title")}</h3>
                <p className="max-2[600px] dark:text-white/60 text-primary/70 mx-auto xl:mx-0">
                  {AboutData("description")}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  <div className="xl:hidden mb-5">
                    <IoPersonCircle className="text-8xl dark:text-white mx-auto hover:text-accent transition-all duration-500 text-gray-800" />
                  </div>
                  {AboutListData.map((item) => {
                    return (
                      <li
                        key={AboutInfo(`${item}.fieldName`)}
                        className="flex items-center xl:justify-start gap-4"
                      >
                        <span className="text-accent">•</span>
                        <span className="dark:text-white/60 text-primary/60">
                          {AboutInfo(`${item}.fieldName`)}
                        </span>
                        <span className="text-base">
                          {AboutInfo(`${item}.fieldValue`)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
