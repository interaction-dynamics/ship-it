"use client";
import { useTranslations } from "@/adapters/translation";

export function ClientTranslations() {
	const { t } = useTranslations("landing");

	return (
		<div className="pt-10">{t("description", { framework: "Next.js" })}</div>
	);
}
