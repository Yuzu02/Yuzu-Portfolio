import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import ProjectTooltip from "./ProjectTooltip";

interface ProjectInfoProps {
  project: {
    num: string;
    category: string;
    title: string;
    description: string;
    stack: { name: string }[];
    live: string;
    github: string;
  };
  liveText: string;
  githubText: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  project,
  liveText,
  githubText,
}) => {
  // Tooltip Icons
  const LiveDemoIcon = (
    <BsArrowUpRight className="text-primary dark:text-white text-3xl group-hover:text-accent" />
  );
  const GithubIcon = (
    <BsGithub className="dark:text-white text-primary text-3xl group-hover:text-accent" />
  );
  return (
    <>
      {/* Outline Number */}
      <div className="text-8xl leading-normal font-extrabold text-transparent text-outline-light dark:text-outline">
        {project.num}
      </div>
      {/* Project Title */}
      <h2 className="text-[42px] font-bold leading-none dark:text-white text-primary group-hover:text-accent transition-all duration-500 capitalize">
        {project.category}
      </h2>
      {/* Project Description */}
      <p className="dark:text-white/60 text-primary/70 ">
        {project.description}
      </p>
      <ul className="flex gap-4">
        {project.stack.map((item, index) => (
          <li key={item.name} className="text-accent text-xl uppercase">
            {item.name}
            {index !== project.stack.length - 1 && ", "}
          </li>
        ))}
      </ul>
      {/* Border */}
      <div className="border dark:border-white/20 border-primary/20"></div>
      {/* Buttons */}
      <div className="flex items-center gap-4">
        {/* Live Demo */}
        <ProjectTooltip
          href={project.live}
          icon={LiveDemoIcon}
          tooltipText={liveText}
        />
        {/* Github */}
        <ProjectTooltip
          href={project.github}
          icon={GithubIcon}
          tooltipText={githubText}
        />
      </div>
    </>
  );
};

export default ProjectInfo;
