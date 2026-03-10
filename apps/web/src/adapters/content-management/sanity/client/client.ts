import { createClient } from '@sanity/client';

/**
 * @see https://www.sanity.io/docs/js-client
 */
const sanity =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET
    ? createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
        useCdn: process.env.NODE_ENV === 'production',
        apiVersion: '2024-03-08'
      })
    : null;

export const getSanity = () => {
  if (!sanity) {
    throw new Error(
      `Sanity is not configured. Please set environment variables NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET`
    );
  }

  return sanity;
};
