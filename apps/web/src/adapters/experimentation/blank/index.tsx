import type { IExperimentationProvider } from "../interfaces";

export const ExperimentationProvider: IExperimentationProvider["ExperimentProvider"] =
	({ children }) => {
		return <>{children}</>;
	};
