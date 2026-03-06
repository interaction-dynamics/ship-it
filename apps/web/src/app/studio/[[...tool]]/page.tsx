import { Studio } from "@/services/content-management/studio";

export {
	metadata,
	viewport,
} from "@/services/content-management/studio";

export const dynamic = "force-static";

export default function StudioPage() {
	return <Studio />;
}
