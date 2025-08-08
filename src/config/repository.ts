import packageJson from '../../package.json'

export const getRepositoryUrl = (): string => packageJson.repository?.url ?? ''

export const getLibraries = () => ({
  ...packageJson.devDependencies,
  ...packageJson.dependencies,
})

export const simplifyLibraryVersion = (version: string): string => {
  return version.split('.')[0].replace('^', '').replace('~', '')
}
