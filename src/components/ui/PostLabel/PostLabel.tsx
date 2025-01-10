import { cn } from '@/utils/cn';

import { PostLabelProps } from './types';

export const PostLabel: React.FC<PostLabelProps> = ({
  type,
  children,
  typeStyle = 'primary',
  className,
  deadline,
}) => {
  const textColor = cn('text-base/normal font-normal, capitalize', {
    'text-textBlue': type?.toLowerCase() === 'news',
    'text-textGreen': type?.toLowerCase() === 'events',
    'text-textRed': type?.toLowerCase() === 'articles',
    'text-blue-800': deadline,
  });

  const baseStyles =
    'flex w-[107px] items-center justify-center rounded-3xl px-6 py-3';

  const stylesVariants = {
    primary: 'absolute right-2 top-2 z-10 bg-bgLight',
    secondary: 'bg-bgSlate',
  };

  const resultStyle = cn(baseStyles, stylesVariants[typeStyle], className);

  return (
    <div className={resultStyle}>
      <p className={textColor}>{children}</p>
    </div>
  );
};
