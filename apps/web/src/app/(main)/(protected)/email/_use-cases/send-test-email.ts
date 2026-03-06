"use server";

import { sendEmail } from "@/adapters/email";

export async function sendTestEmail() {
	sendEmail({
		to: ["daneel09@gmail.com"],
		subject: "Test Email",
		text: "This is a test email.",
		html: "<p>This is a test email.</p>",
	});
}
