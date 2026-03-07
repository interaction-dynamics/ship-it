'use server';
import { cookies } from 'next/headers';

const NEXT_LOCALE = 'next_locale';

export async function changeLocale(locale: string) {
  const cookieStore = await cookies();
  cookieStore.set(NEXT_LOCALE, locale);
}
