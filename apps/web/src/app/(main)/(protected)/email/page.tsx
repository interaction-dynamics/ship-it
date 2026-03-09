import { getTranslations } from '@/adapters/translation';
import { Section } from '@/components/section';
import { EmailButton } from './_components/email-button';
import { FormattedEmailButton } from './_components/formatted-email-button';

export default async function EmailPage() {
  const { t } = await getTranslations('email');

  return (
    <Section title={t('title')}>
      <p className="py-10">{t('description')}</p>
      <div className="space-x-2">
        <EmailButton />
        <FormattedEmailButton />
      </div>
    </Section>
  );
}
