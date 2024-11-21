import { cn } from '@/utils/cn';

import { PostLabelProps } from './types';

export const PostLabel: React.FC<PostLabelProps> = ({ label, children }) => {
  const textColor = cn('text-base/normal font-normal, capitalize', {
    'text-textBlue':
      label.toLowerCase() === 'news' || label.toLowerCase() === 'новини',
    'text-textGreen':
      label.toLowerCase() === 'events' || label.toLowerCase() === 'події',
    'text-textRed':
      label.toLowerCase() === 'articles' || label.toLowerCase() === 'статті',
  });

  return (
    <div className="absolute right-2 top-2 z-10 flex w-[107px] items-center justify-center rounded-3xl bg-bgLight px-6 py-3">
      <p className={textColor}>{children}</p>
    </div>
  );
};
