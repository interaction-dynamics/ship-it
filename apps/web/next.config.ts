import path from "node:path";
import type { NextConfig } from "next";
import * as contentManagement from "@/adapters/content-management/wrappers";
import * as devTools from "@/adapters/dev-tools";
import { wrapConfig } from "@/lib/wrap-config";

const nextConfig: NextConfig = {
	turbopack: {
		root: path.join(__dirname, "../.."),
	},

	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	experimental: {
		authInterrupts: true,
		serverActions: {
			bodySizeLimit: "50mb",
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
};

const wrappers = [
	...devTools.wrappers,
	...contentManagement.wrappers,
	// Add more wrappers here, as desired
];

export default wrapConfig(nextConfig, wrappers);
