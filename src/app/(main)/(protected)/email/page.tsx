import { Section } from '@/components/section'
import { getTranslations } from '@/services/translation'
import { EmailButton } from './_components/email-button'

export default async function EmailPage() {
  const { t } = await getTranslations('email')

  return (
    <Section title={t('title')}>
      <p className="py-10">{t('description')}</p>
      <EmailButton />
    </Section>
  )
}
