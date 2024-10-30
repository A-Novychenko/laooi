import Link from 'next/link';

import { cn } from '@/utils/cn';

import LineIcon from '~/icons/line.svg';

import { LangSwitcherProps } from './types';

export const LangSwitcher: React.FC<LangSwitcherProps> = ({
  lang,
  langCode,
}) => {
  return (
    <div className="flex items-center gap-4 p-2">
      <Link
        href="/uk"
        type="button"
        className={cn(
          'text-xs10/normal font-bold transition-colors xl:text-sm/normal',
          lang === 'uk'
            ? 'text-textAccent'
            : 'text-textSlate hover:text-textPrimary focus:text-textPrimary',
        )}
      >
        {langCode.ua}
      </Link>

      <div className="xl:py-1">
        <LineIcon width="2" height="18" className="block h-[18px] w-[2px]" />
      </div>

      <Link
        href="/en"
        type="button"
        className={cn(
          'text-xs10/normal font-bold transition-colors xl:text-sm/normal',
          lang === 'en'
            ? 'text-textAccent'
            : 'text-textSlate hover:text-textPrimary focus:text-textPrimary',
        )}
      >
        {langCode.en}
      </Link>
    </div>
  );
};
