'use server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { cookies, headers } from 'next/headers'
import { translationConfig } from '../../../../translations.config'
import type { Parameters } from '../_types/parameters'
import { TranslationProviderClient } from './_private/context'
import { findTranslation } from './_private/findTranslation'

const NEXT_LOCALE = 'next_locale'

const { defaultLocale, defaultNamespace, namespaces, languages } =
  translationConfig

export async function getLanguages() {
  return languages
}

export async function getLocale() {
  const cookieStore = await cookies()

  if (cookieStore.has(NEXT_LOCALE)) {
    return cookieStore.get(NEXT_LOCALE)?.value ?? defaultLocale
  }

  const headersList = await headers()

  const allHeaders = [...headersList.entries()].reduce(
    (acc: Record<string, string | string[] | undefined>, [name, value]) => {
      acc[name] = value

      return acc
    },
    {},
  )

  const browerLanguages = new Negotiator({ headers: allHeaders }).languages()

  const locales = languages.map((l) => l.locale)

  try {
    return match(browerLanguages, locales, defaultLocale)
  } catch {
    return defaultLocale
  }
}

export async function changeLocale(locale: string) {
  const cookieStore = await cookies()
  cookieStore.set(NEXT_LOCALE, locale)
}

export async function getMessages(locale: string) {
  const promises = namespaces.map(async (namespace) => [
    namespace,
    (await import(`../../../messages/translations/${locale}/${namespace}.json`))
      .default,
  ])

  return Object.fromEntries(await Promise.all(promises))
}

export async function getTranslations(namespace?: string) {
  const locale = await getLocale()
  const messages = await getMessages(locale)
  const languages = await getLanguages()

  return {
    locale,
    languages,
    t: (
      key: string,
      parameters: Parameters = {},
      specificNamespace?: string,
    ) => {
      const foundNamespace = specificNamespace ?? namespace ?? defaultNamespace
      return findTranslation(key, messages, foundNamespace, parameters)
    },
  }
}

interface Props extends React.PropsWithChildren {
  defaultNamespace: string
}

export async function TranslationProvider(props: Props) {
  const locale = await getLocale()
  const messages = await getMessages(locale)
  const languages = await getLanguages()

  return (
    <TranslationProviderClient
      {...props}
      locale={locale}
      messages={messages}
      languages={languages}
      defaultNamespace={defaultNamespace}
    />
  )
}
