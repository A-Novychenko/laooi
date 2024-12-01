import { cn } from '@/utils/cn';

import { PostLabelProps } from './types';

export const PostLabel: React.FC<PostLabelProps> = ({
  label,
  children,
  typeStyle = 'primary',
  className,
}) => {
  const textColor = cn('text-base/normal font-normal, capitalize', {
    'text-textBlue':
      label.toLowerCase() === 'news' || label.toLowerCase() === 'новини',
    'text-textGreen':
      label.toLowerCase() === 'events' || label.toLowerCase() === 'події',
    'text-textRed':
      label.toLowerCase() === 'articles' || label.toLowerCase() === 'статті',
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
