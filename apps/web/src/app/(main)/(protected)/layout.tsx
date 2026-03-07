import { RedirectToSignIn, SignedIn, SignedOut } from '@/adapters/authentication';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
