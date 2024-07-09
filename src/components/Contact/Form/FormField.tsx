// components/FormField.tsx
import { Input } from "@/components/common/input";
import ErrorMessage from "./ErrorMessage";

type FormFieldProps = {
  id: string;
  type: string;
  placeholder: string;
  register: any;
  errors: any;
  formMessages: any;
  autoComplete?: string;
};

export const FormField: React.FC<FormFieldProps> = ({
  id,
  type,
  placeholder,
  register,
  errors,
  formMessages,
  autoComplete,
}) => (
  <div className="flex flex-col">
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      autoComplete={autoComplete}
      {...register(id, {
        required: true,
        ...(type === "email" && {
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        }),
        ...(type === "tel" && { pattern: /^(\d[-\s]?){10,14}$/ }),
        ...(type !== "email" &&
          type !== "tel" && { maxLength: 200, minLength: 3 }),
      })}
    />
    <ErrorMessage error={errors[id]} messages={formMessages} />
  </div>
);
