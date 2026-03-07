import { getTranslations } from '@/adapters/translation';
import { Typography } from '@/components/typography';
import { ClientTranslations } from './_components/client-translations';

export default async function Page() {
  const { t } = await getTranslations();

  return (
    <div className="p-10">
      <div className="container max-w-2xl m-auto text-center">
        <Typography variant="h1">{t('Index.title')}</Typography>
        <ClientTranslations />
      </div>
    </div>
  );
}
