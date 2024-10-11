import Link from 'next/link';

import { cn } from '@/utils/cn';

import LineIcon from '~/icons/line.svg';

import { LangSwitcherProps } from './types';

export const LangSwitcher: React.FC<LangSwitcherProps> = ({
  lang,
  langCode,
}) => {
  return (
    <div className="flex gap-2 p-2">
      <Link
        href="/uk"
        type="button"
        className={cn(
          'text-[14px] font-bold',
          lang === 'uk' ? 'text-textPrimary' : 'text-textSlate',
        )}
      >
        {langCode.ua}
      </Link>

      <LineIcon width="2" height="18" className="block h-[18px] w-[2px]" />

      <Link
        href="/en"
        type="button"
        className={cn(
          'text-[14px] font-bold',
          lang === 'en' ? 'text-textPrimary' : 'text-textSlate',
        )}
      >
        {langCode.en}
      </Link>
    </div>
  );
};
