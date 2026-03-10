import type { NextProxy } from 'next/server';
import { SessionProvider } from 'next-auth/react';
import { Button, type ButtonProps } from '@/components/ui/button';

export const authMiddleware = (): NextProxy => () => null;

export const AuthenticationProvider = SessionProvider;

interface SignInButtonProps extends ButtonProps {
  forceRedirectUrl?: string;
}

export function SignInButton({ forceRedirectUrl, ...props }: SignInButtonProps) {
  return <Button {...props}>Sign In</Button>;
}

interface SignUpButtonProps extends ButtonProps {
  forceRedirectUrl?: string;
}

export function SignUpButton({ forceRedirectUrl, ...props }: SignUpButtonProps) {
  return <Button {...props}>Sign Up</Button>;
}
