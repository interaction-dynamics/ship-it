import type { Authentication } from "./interfaces";

export const getProvider = async (): Promise<Authentication> => {
	if (process.env.CLERK_SECRET_KEY) return await import("./clerk");

	return await import("./blank");
};

const provider = await getProvider();

export const {
	authMiddleware,
	SignedIn,
	SignedOut,
	RedirectToSignIn,
	AuthenticationProvider,
} = provider;
