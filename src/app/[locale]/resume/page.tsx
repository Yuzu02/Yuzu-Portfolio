"use client";

// Translation
import { useTranslations } from "next-intl";

// Components
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/tabs";
import ExperienceTab from "@/components/Resume/ExperienceTab";
import EducationTab from "@/components/Resume/EducationTab";
import SkillsTab from "@/components/Resume/SkillsTab";
import AboutTab from "@/components/Resume/AboutTab";

// Extra
import { motion } from "framer-motion";

export default function Resume() {
  // Translation Hook
  const Resume = useTranslations("Resume");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-5"
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
              <ExperienceTab />
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <EducationTab />
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <SkillsTab />
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full">
              <AboutTab />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
