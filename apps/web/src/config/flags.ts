import { postHogAdapter } from '@flags-sdk/posthog';
import { statsigAdapter } from '@flags-sdk/statsig';
import { vercelAdapter } from '@flags-sdk/vercel';
import { flag } from 'flags/next';

export const hideLogoLocal = flag({
  key: 'hide-logo-local',
  defaultValue: false,
  decide() {
    return false;
  }
});

export const hideLogoVercel = flag({
  key: 'hide-logo-vercel',
  defaultValue: false,
  adapter: vercelAdapter()
});

export const hideLogoPostHog = flag({
  key: 'hide-logo-posthog',
  defaultValue: false,
  adapter: postHogAdapter.isFeatureEnabled()
});

export const hideLogoStatsig = flag({
  key: 'hide-logo-statsig',
  defaultValue: false,
  adapter: statsigAdapter.featureGate((config) => config.value)
});
