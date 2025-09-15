import type { translationConfig } from '../../../../translations.config'
import type { Translations } from './translations'

export interface Messages {
  [key: (typeof translationConfig)['namespaces'][number]]: Translations
}
