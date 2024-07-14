"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect } from "react";
import { Button } from "@/components/common/button";
import { Textarea } from "@/components/common/textarea";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/common/select";
import { FormField } from "./FormField";
import ErrorMessage from "./ErrorMessage";
import { useAllTranslations } from "@/Hook/useAllTranslations";
import { submitForm } from "@/actions/email";
import { toast } from "sonner";

type Inputs = {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	service: string;
	message: string;
};

const formFields = [
	{ id: "firstname", type: "text", autoComplete: "given-name" },
	{ id: "lastname", type: "text", autoComplete: "family-name" },
	{
		id: "email",
		type: "email",
		autoComplete: "email",
		pattern:
			"[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}",
	},
	{
		id: "phone",
		type: "tel",
		autoComplete: "tel",
		pattern: "^(\\d[-\\s]?){10,14}$",
	},
];

export default function ContactForm() {
	// React Hook Form
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		watch,
		reset,
	} = useForm<Inputs>();

	const watchFields = watch();

	useEffect(() => {
		if (process.env.NODE_ENV !== "production") {
			console.log(watchFields);
		}
	}, [watchFields]);

	// Translations
	const { Contact, Toaster: ToasterTranslations } = useAllTranslations();

	// Handler
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const formData = new FormData();
		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value);
		});

		toast.promise(submitForm(formData), {
			loading: ToasterTranslations.Form.loading,
			success: (_data) => {
				reset();
				return ToasterTranslations.Form.success;
			},
			error: ToasterTranslations.Form.error,
		});
	};

	return (
		<div className="xl:w-[54%] order-2 xl:order-none">
			<form
				className="flex flex-col gap-4 bg-gray-200/80 dark:bg-list rounded-xl p-8"
				onSubmit={handleSubmit(onSubmit)}
				name="Contact Form send by Yuzu Portfolio"
				noValidate
			>
				<h3 className="text-accent text-4xl">{Contact.formData.title}</h3>
				<p className="dark:text-white/60 text-primary/70">
					{Contact.formData.description}
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{formFields.map((field) => (
						<FormField
							key={field.id}
							id={field.id}
							type={field.type}
							placeholder={
								Contact.formData[field.id as keyof typeof Contact.formData]
							}
							register={register}
							errors={errors}
							formErrorMessages={Contact.formErrorMessages}
							autoComplete={field.autoComplete}
							pattern={field.pattern}
						/>
					))}
				</div>
				<div className="flex flex-col">
					<Controller
						name="service"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<Select onValueChange={field.onChange} value={field.value}>
								<SelectTrigger className="w-full">
									<SelectValue
										placeholder={Contact.ServicesTabs.title}
										aria-label="Service"
									/>
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>{Contact.ServicesTabs.title}</SelectLabel>
										{Object.entries(Contact.ServicesTabs).map(
											([key, value]) =>
												key !== "title" && (
													<SelectItem key={key} value={key.toLowerCase()}>
														{value}
													</SelectItem>
												),
										)}
									</SelectGroup>
								</SelectContent>
							</Select>
						)}
					/>
					<ErrorMessage
						error={errors.service}
						messages={Contact.formErrorMessages}
					/>
				</div>
				<div className="flex flex-col">
					<Textarea
						className="h-[110px] w-full resize-none overflow-y-auto"
						placeholder={Contact.formData.message}
						id="message"
						{...register("message", {
							required: true,
							maxLength: 1500,
							minLength: 30,
						})}
					/>
					<ErrorMessage
						error={errors.message}
						messages={Contact.formErrorMessages}
					/>
				</div>
				<Button
					size="md"
					className="max-w-40 font-semibold text-light bg-accent dark:bg-accent hover:bg-accent-hover dark:hover:bg-accent-hover dark:hover:text-primary"
					variant="default"
					type="submit"
				>
					{Contact.formData.send}
				</Button>
			</form>
		</div>
	);
}
