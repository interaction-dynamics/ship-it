import type { Social } from '@/entities/social'
import { getSocialIcon } from './get-social-icon'

export const convertSocials = (socials: Record<string, string>): Social[] =>
  Object.entries(socials)
    .map(([name, url]) => ({
      name,
      url,
      icon: getSocialIcon({ name }),
    }))
    .filter(({ url }) => url)
