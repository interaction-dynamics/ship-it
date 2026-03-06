import { Studio } from "@/adapters/content-management/studio";

export {
	metadata,
	viewport,
} from "@/adapters/content-management/studio";

export const dynamic = "force-static";

export default function StudioPage() {
	return <Studio />;
}
