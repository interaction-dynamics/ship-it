import type { EmailProvider } from './interfaces';

export type { Email } from './interfaces';

export const getProvider = async (): Promise<EmailProvider> => {
  if (process.env.MAILGUN_API_KEY) return await import('./mailgun');

  return await import('./blank');
};

const provider = await getProvider();

export const sendEmail = provider.sendEmail;
