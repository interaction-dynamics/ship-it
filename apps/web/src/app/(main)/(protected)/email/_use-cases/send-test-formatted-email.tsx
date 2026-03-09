'use server';

import { sendFormattedEmail } from '@/adapters/email/resend';
import { WelcomeEmail } from '../../../../../content/emails/welcome-email';

export async function sendTestFormattedEmail() {
  await sendFormattedEmail({
    to: ['thibault.friedrich@gmail.com'],
    subject: 'Test',
    react: <WelcomeEmail url="" />
  });
}
