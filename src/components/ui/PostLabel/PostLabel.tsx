import { getLabelColor } from '@/utils/getLabelColor';
import { cn } from '@/utils/cn';

import { PostLabelProps } from './types';

import styles from './PostLabel.module.css';

export const PostLabel: React.FC<PostLabelProps> = ({ label, children }) => {
  const textColor = getLabelColor(label);

  return (
    <div className="absolute right-2 top-2 flex w-[107px] items-center justify-center rounded-3xl bg-bgLight px-6 py-3">
      <p className={cn('text-base/normal font-normal', styles[textColor])}>
        {children}
      </p>
    </div>
  );
};
