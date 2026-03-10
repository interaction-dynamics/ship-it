import { PortableText } from '@portabletext/react';

export function RichText({ content }: { content: any }) {
  return <PortableText value={content} />;
}
