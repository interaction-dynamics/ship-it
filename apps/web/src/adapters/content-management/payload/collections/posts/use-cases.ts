import { getPayload } from 'payload';
import type * as payloadTypes from '@/adapters/content-management/payload/payload-types';
import type { Post } from '@/entities/post/post';

function mapToPost(doc: payloadTypes.Post): Post {
  return {
    title: doc.title as string,
    slug: doc.slug as string,
    description: doc.description as string,
    content: doc.content,
    date: doc.date as string,
    readTime: doc.readTime as string | undefined,
    categories: ((doc.categories as { value: string }[] | undefined) ?? []).map((c) => c.value),
    imageUrl: doc.imageUrl as string | undefined
  };
}

async function getPayloadClient() {
  const { default: config } = await import('@payload-config');
  return getPayload({ config });
}

export async function fetchPosts(): Promise<Post[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({ collection: 'posts' });
  return result.docs.map(mapToPost);
}

export async function fetchOnePost(slug: string): Promise<Post | null> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1
  });
  return result.docs[0] ? mapToPost(result.docs[0]) : null;
}
