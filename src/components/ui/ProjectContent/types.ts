import type { PortableTextBlock } from 'sanity';

export type ProjectContentProps = {
  body?:
    | string
    | {
        title: string;
        text: PortableTextBlock;
      }[];
};
