'use server';

import type { Post } from '@/entities/post';
import { getSanity } from '../../client/client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapPost(post: any) {
  return {
    slug: post.slug.current,
    title: post.title,
    description: '',
    content: post.body,
    date: post._createdAt,
    imageUrl: undefined,
    categories: []
  };
}

export async function fetchPosts(): Promise<Post[]> {
  try {
    const posts =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await getSanity().fetch<any[]>(
        `*[_type == 'post']`,
        {},
        {
          cache: 'force-cache',
          next: { revalidate: 60 }
        }
      );

    return posts.map(mapPost);
  } catch (error) {
    console.error('Failed to fetch posts', error);
    return [];
  }
}

export async function fetchOnePost(slug: string): Promise<Post | null> {
  try {
    const [post] =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await getSanity().fetch<any[]>(
        `*[_type == 'post' && slug.current == $slug]`,
        { slug },
        {
          cache: 'force-cache',
          next: { revalidate: 60 }
        }
      );

    return post ? mapPost(post) : null;
  } catch (error) {
    console.error('Failed to fetch post', error);
    return null;
  }
}
