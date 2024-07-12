import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semi-bold ring-offset-white transition-colors ",
	{
		variants: {
			variant: {
				default:
					"bg-accent dark:text-primary hover:bg-accent-hover text-primary",
				primary: "bg-primary dark:text-white text-primary",
				outline:
					"border border-accent bg-transparent hover:bg-accent dark:hover:text-primary hover:text-white",
				toggleTheme:
					"bg-accent text-primary font-bold text-xl rounded-full",
				outlineToggle:
					"border border-primary/80 dark:border-primary bg-transparent text-xl font-bold text-yellow-400 rounded-lg",
				themeToggle:
					"dark:bg-primary text-xl font-bold dark:text-yellow-400 dark:rounded-lg  ring-offset-none xl:bg-light bg-gray/500/50 text-white hover:text-yellow-400 hover:bg-light dark:hover:bg-primary transition-all duration-700 text-yellow-400 rounded-sm",
				languageToggle:
					"bg-accent dark:text-primary hover:bg-accent-hover text-white",
			},
			size: {
				default: "h-[44px] px-6",
				md: "h-[48px] px-6",
				lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
				sm: "h-[36px] px-4",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
