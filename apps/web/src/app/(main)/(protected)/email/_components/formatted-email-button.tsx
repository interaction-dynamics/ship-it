'use client';
import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { sendTestFormattedEmail } from '../_use-cases/send-test-formatted-email';

export function FormattedEmailButton() {
  const [isPending, startTransition] = useTransition();

  const sendTestEmail = async () => {
    startTransition(async () => {
      await sendTestFormattedEmail();
    });
  };

  return (
    <Button onClick={() => sendTestEmail()} disabled={isPending}>
      {isPending ? 'Sending...' : 'Send Formatted Email'}
    </Button>
  );
}
