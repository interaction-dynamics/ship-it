import { createFlagsDiscoveryEndpoint, getProviderData } from 'flags/next';
import * as flags from '@/config/flags';

export const GET = createFlagsDiscoveryEndpoint(() => getProviderData(flags));
