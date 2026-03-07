export interface Email {
	to: string[];
	subject: string;
	text: string;
	html: string;
}

export type SendEmail = (email: Email) => Promise<void>;

export type EmailProvider = {
	sendEmail: SendEmail;
};
