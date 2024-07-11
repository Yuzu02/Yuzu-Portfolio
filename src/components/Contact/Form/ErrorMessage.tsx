type ErrorMessageProps = {
  error?: {
    type?: string;
  };
  messages: {
    required: string;
    minLength?: string;
    maxLength?: string;
    pattern?: string;
    textAreaMinLength?: string;
    textAreaMaxLength?: string;
  };
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, messages }) => {
  if (!error) return null;

  let errorMessage = null;

  if (error.type === "required") {
    errorMessage = messages.required;
  } else if (error.type === "textAreaMinLength") {
    errorMessage = messages.textAreaMinLength;
  } else if (error.type === "textAreaMaxLength") {
    errorMessage = messages.textAreaMaxLength;
  } else if (error.type === "pattern") {
    errorMessage = messages.pattern;
  } else if (error.type === "minLength") {
    errorMessage = messages.minLength;
  } else if (error.type === "maxLength") {
    errorMessage = messages.maxLength;
  }

  if (!errorMessage) return null;

  return (
    <span className="text-red-500 dark:font-extralight font-normal text-xs ml-2 mt-2">
      {errorMessage}
    </span>
  );
};

export default ErrorMessage;
