import {
  ClerkProvider,
  SignInButton as ClerkSignInButton,
  SignUpButton as ClerkSignUpButton,
  UserButton as ClerkUserButton,
} from '@clerk/nextjs'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { protectedRoutes } from '@/app/(main)/(protected)/protected-routes'
import { Button, type ButtonProps } from '@/components/ui/button'

export { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'

const isProtectedRoute = createRouteMatcher(protectedRoutes)

export const authMiddleware = () =>
  clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect()
  })

export const AuthenticationProvider = ClerkProvider

interface SignInButtonProps extends ButtonProps {
  forceRedirectUrl?: string
}

export function SignInButton({
  forceRedirectUrl,
  ...props
}: SignInButtonProps) {
  return (
    <ClerkSignInButton forceRedirectUrl={forceRedirectUrl}>
      <Button {...props}>Sign In</Button>
    </ClerkSignInButton>
  )
}

interface SignUpButtonProps extends ButtonProps {
  forceRedirectUrl?: string
}

export function SignUpButton({
  forceRedirectUrl,
  ...props
}: SignUpButtonProps) {
  return (
    <ClerkSignUpButton forceRedirectUrl={forceRedirectUrl}>
      <Button {...props}>Sign Up</Button>
    </ClerkSignUpButton>
  )
}

export function UserButton() {
  return <ClerkUserButton />
}
