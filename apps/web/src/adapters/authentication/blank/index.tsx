export const authMiddleware = () => null;

export function SignedIn({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

export function SignedOut({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

export function RedirectToSignIn() {
  return null;
}

export function AuthenticationProvider({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
