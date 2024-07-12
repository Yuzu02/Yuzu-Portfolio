import { ReactNode } from "react";

interface ContactInfoItemProps {
	icon: ReactNode;
	title: string;
	description: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
	icon,
	title,
	description,
}) => (
	<li className="flex items-center gap-6">
		<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gray-200/80 text-accent dark:bg-list dark:text-accent rounded-md flex items-center justify-center ">
			<div className="text-[28px]">{icon}</div>
		</div>
		<div className="flex-1">
			<p className="dark:text-white/60 text-primary/60">{title}</p>
			<h3 className="text-xl">{description}</h3>
		</div>
	</li>
);

export default ContactInfoItem;
