import type { IStudio } from "./interfaces.studio";

export * from "./sanity/studio";

export const getProvider = async (): Promise<IStudio> => {
	if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
		return await import("./sanity/studio");

	return await import("./blank");
};

export default await getProvider();
