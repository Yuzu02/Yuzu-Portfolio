import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/common/tooltip";
import { FaHtml5, FaCss3, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import PythonLogo from "@/components/extra/PythonLogo";

const SkillsTab = () => {
  const SkillsData = useTranslations("Skill");
  const { resolvedTheme } = useTheme();

  const skills = [
    {
      icon: (
        <FaHtml5 color={resolvedTheme === "dark" ? undefined : "#E34F26"} />
      ),
      name: "HTML5",
    },
    {
      icon: <FaCss3 color={resolvedTheme === "dark" ? undefined : "#1572B6"} />,
      name: "CSS3",
    },
    {
      icon: (
        <SiTailwindcss
          color={resolvedTheme === "dark" ? undefined : "#06B6D4"}
        />
      ),
      name: "Tailwind CSS",
    },
    {
      icon: (
        <SiTypescript
          color={resolvedTheme === "dark" ? undefined : "#3178C6"}
        />
      ),
      name: "TypeScript",
    },
    {
      icon: (
        <FaReact color={resolvedTheme === "dark" ? undefined : "#61DAFB"} />
      ),
      name: "React.js",
    },
    {
      icon: (
        <SiNextdotjs color={resolvedTheme === "dark" ? undefined : "#000000"} />
      ),
      name: "Next.js",
    },
    {
      icon: resolvedTheme === "dark" ? <FaPython /> : <PythonLogo />,
      name: "Python",
    },
    {
      icon: (
        <FaGitAlt color={resolvedTheme === "dark" ? undefined : "#F05032"} />
      ),
      name: "Git",
    },
  ];

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] items-center xl:text-left">
        <h3 className="text-4xl font-bold">{SkillsData("title")}</h3>
        <p className="max-w-[600px] dark:text-white/60 text-primary/70 mx-auto xl:mx-0 text-center xl:text-left">
          {SkillsData("description")}
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.map((skill) => (
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
        ))}
      </ul>
    </div>
  );
};

export default SkillsTab;
