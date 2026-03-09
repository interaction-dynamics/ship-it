import { Resend } from 'resend';
import type { FormattedEmail } from '../interfaces';

const env = process.env.RESEND_API_KEY;

const resend = new Resend(env);

export async function sendFormattedEmail(email: FormattedEmail): Promise<void> {
  const { error } = await resend.emails.send({
    from: email.from ?? process.env.RESEND_EMAIL_FROM ?? '',
    to: email.to,
    subject: email.subject,
    react: email.react
  });

  if (error) {
    throw error;
  }
}
