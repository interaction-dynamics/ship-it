import { getTranslations } from '@/adapters/translation';

export default async function LegalPage() {
  const { locale } = await getTranslations();

  // you need to use relative imports for dynamic imports with a variable
  const { default: TermsOfService } = await import(
    `../../../content/markdown/${locale}/terms-of-service.mdx`
  );

  return (
    <div className="px-2 py-10">
      <div className="container max-w-2xl m-auto ">
        <TermsOfService />
      </div>
    </div>
  );
}
