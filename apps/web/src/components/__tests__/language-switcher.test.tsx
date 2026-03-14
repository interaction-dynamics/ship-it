import { render, screen } from '@testing-library/react';
import { LanguageSelector } from '../language-selector';

vi.mock('@/adapters/translation', () => ({
  useTranslations: () => ({
    locale: 'en',
    languages: [],
    t: (key: string) => key,
    changeLocale: vi.fn(),
  }),
  changeLocale: vi.fn(),
}));

describe('LanguageSelector', () => {
  it('should render language selector', async () => {
    render(<LanguageSelector />);

    expect(screen.getByText('Change language')).toBeInTheDocument();
  });
});
