import type { Metadata, Viewport } from "next";

export interface IStudio {
	Studio: () => React.JSX.Element | Promise<React.JSX.Element>;
	metadata: Metadata;
	viewport: Viewport;
}
