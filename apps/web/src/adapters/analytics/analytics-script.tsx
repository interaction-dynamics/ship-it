import { GoogleProvider } from './google';
import { HotJar } from './hotjar';
import { Analytics } from './vercel';

export function AnalyticsScript() {
  return (
    <>
      <HotJar />
      <GoogleProvider />
      <Analytics />
    </>
  );
}
