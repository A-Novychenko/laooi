import { PortableText } from '@portabletext/react';

import { PostTextProps } from './types';

import styles from './PostText.module.css';

export const PostText: React.FC<PostTextProps> = ({ body }) => {
  return (
    <div className={`mx-auto mb-4 xl:mb-6 ${styles.textBlock}`}>
      <PortableText value={body} />
    </div>
  );
};
