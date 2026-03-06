import project from "../../../../project.json";

export const getCompanyName = (): string => {
	return project.company ?? "Your Company, Inc.";
};

export const getProductName = (): string => project.title;

export const getProductDescription = (): string => project.description;

export const getSocials = () => project.socials;
