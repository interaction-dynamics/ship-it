import { getTranslations } from "@/adapters/translation";
import { Section } from "@/components/section";

export default async function DashboardPage() {
	const { t } = await getTranslations("dashboard");

	return <Section title={t("title")}></Section>;
}
