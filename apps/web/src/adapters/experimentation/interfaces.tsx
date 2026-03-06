export interface IExperimentationProvider {
	ExperimentProvider: (props: {
		children: React.ReactNode;
	}) => React.JSX.Element | Promise<React.JSX.Element>;
}
