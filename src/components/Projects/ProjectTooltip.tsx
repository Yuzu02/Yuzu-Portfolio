import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/common/tooltip";
import Link from "next/link";

interface ProjectTooltipProps {
	href: string;
	icon: React.ReactNode;
	tooltipText: string;
}

const ProjectTooltip: React.FC<ProjectTooltipProps> = ({
	href,
	icon,
	tooltipText,
}) => {
	return (
		<Link href={href}>
			<TooltipProvider delayDuration={100}>
				<Tooltip>
					<TooltipTrigger className="w-[70px] h-[70px] bg-primary/5 rounded-full dark:bg-white/5 flex justify-center items-center group">
						{icon}
					</TooltipTrigger>
					<TooltipContent>
						<p>{tooltipText}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</Link>
	);
};

export default ProjectTooltip;
