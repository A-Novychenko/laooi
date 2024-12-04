import { PortableText } from '@portabletext/react';

import { PostTextProps } from './types';

export const PostText: React.FC<PostTextProps> = ({ body }) => {
  // return <p className="text-base/normal md:text-lg">{body}</p>;
  return <PortableText value={body} />;
};
