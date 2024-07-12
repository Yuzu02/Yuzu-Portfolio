import { z } from "zod";

const envVars = z.object({
	WEB3FORMS_ACCESS_KEY: z.string(),
});

envVars.parse(process.env);

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof envVars> {}
	}
}
