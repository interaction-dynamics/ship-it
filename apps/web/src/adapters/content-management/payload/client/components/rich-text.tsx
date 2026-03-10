import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react';

export function RichText({ content }: { content: any }) {
  return <LexicalRichText data={content} />;
}
