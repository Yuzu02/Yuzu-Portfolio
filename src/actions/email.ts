"use server";

export async function submitForm(formData: FormData) {
	const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

	if (!apiKey) {
		throw new Error("API key not configured");
	}
	formData.append(
		"subject",
		"New Contact Form Submission from Yuzu Portfolio",
	);
	formData.append("access_key", apiKey);

	try {
		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();
		return data;
	} catch (e) {
		throw new Error("Failed to create task");
	}
}
