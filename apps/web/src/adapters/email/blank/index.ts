import type { Email, FormattedEmail } from '../interfaces';

export function sendEmail(_email: Email): Promise<void> {
  throw new Error('Not implemented');
}

export function sendFormattedEmail(_email: FormattedEmail): Promise<void> {
  throw new Error('Not implemented');
}
