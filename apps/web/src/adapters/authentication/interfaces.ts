import type { NextProxy } from 'next/server';
import type { PropsWithChildren } from 'react';

export interface Authentication {
  authMiddleware: () => NextProxy | null;
  SignedIn: React.FC<PropsWithChildren>;
  SignedOut: React.FC<PropsWithChildren>;
  AuthenticationProvider: (p: {
    children: React.ReactNode;
  }) => React.JSX.Element | Promise<React.JSX.Element>;
  RedirectToSignIn: React.FC;
}
