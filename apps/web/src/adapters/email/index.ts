import type { EmailProvider } from './interfaces';

export type { Email } from './interfaces';

export const getProvider = async (): Promise<EmailProvider> => {
  console.log('process.env.RESEND_API_KEY', process.env.RESEND_API_KEY);
  return {
    ...(await import('./blank')),
    ...(process.env.MAILGUN_API_KEY ? await import('./mailgun') : {}),
    ...(process.env.RESEND_API_KEY ? await import('./resend') : {})
  };
};

const provider = await getProvider();

export const { sendEmail, sendFormattedEmail } = provider;
