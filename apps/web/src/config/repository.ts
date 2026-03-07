import projectPackage from '../../package.json';

export const getRepositoryUrl = (): string => 'https://github.com/interaction-dynamics/ship-it';

export const getLibraries = () => ({
  ...projectPackage.devDependencies,
  ...projectPackage.dependencies
});

export const simplifyLibraryVersion = (version: string): string => {
  return version.split('.')[0].replace('^', '').replace('~', '');
};
