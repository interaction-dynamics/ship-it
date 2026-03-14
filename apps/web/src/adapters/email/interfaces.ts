export interface IEmail {
  from?: string;
  to: string[];
  subject: string;
}

export interface Email extends IEmail {
  text: string;
  html: string;
}

export type SendEmail = (email: Email) => Promise<void>;

export interface FormattedEmail extends IEmail {
  react: React.ReactNode;
}

export type SendFormattedEmail = (email: FormattedEmail) => Promise<void>;

export type EmailProvider = {
  sendEmail: SendEmail;
  sendFormattedEmail: SendFormattedEmail;
};
