import type { ReactNode } from 'react'
import { z } from 'zod'

export const SocialIconRenderer = z.function({
  input: [
    z.object({
      className: z.string(),
      'aria-hidden': z.literal('true'),
    }),
  ],
  output: z.custom<ReactNode>(),
})

export type SocialIconRenderer = z.infer<typeof SocialIconRenderer>

export const Social = z.object({
  name: z.string(),
  url: z.url(),
  icon: SocialIconRenderer,
})

export type Social = z.infer<typeof Social>
