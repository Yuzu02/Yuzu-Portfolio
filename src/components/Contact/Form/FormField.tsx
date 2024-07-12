// components/FormField.tsx
import { Input } from "@/components/common/input";
import ErrorMessage from "./ErrorMessage";

type FormFieldProps = {
	id: string;
	type: string;
	placeholder: string;
	register: any;
	errors: any;
	formErrorMessages: {
		required: string;
		minLength: string;
		maxLength: string;
		invalidEmail: string;
		invalidPhone: string;
		textAreaMinLength: string;
		textAreaMaxLength: string;
	};
	autoComplete?: string;
	pattern?: string;
};

export const FormField: React.FC<FormFieldProps> = ({
	id,
	type,
	placeholder,
	register,
	errors,
	formErrorMessages,
	autoComplete,
	pattern,
}) => (
	<div className="flex flex-col">
		<Input
			type={type}
			id={id}
			placeholder={placeholder}
			autoComplete={autoComplete}
			{...register(id, {
				required: true,
				...(pattern && {
					pattern: {
						value: new RegExp(pattern),
						message:
							type === "email"
								? formErrorMessages.invalidEmail
								: formErrorMessages.invalidPhone,
					},
				}),
				...(type !== "email" &&
					type !== "tel" && { maxLength: 200, minLength: 3 }),
			})}
		/>
		<ErrorMessage error={errors[id]} messages={formErrorMessages} />
	</div>
);
