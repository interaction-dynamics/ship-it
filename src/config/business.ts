import packageJson from '../../package.json'

export const getCompanyName = (): string => {
  return packageJson.details?.company ?? 'Your Company, Inc.'
}
