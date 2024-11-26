'use client';

import { useRouter, usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';

import LineIcon from '~/icons/line.svg';

import { LangSwitcherProps } from './types';

export const LangSwitcher: React.FC<LangSwitcherProps> = ({
  lang,
  langCode,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const processPathname = (pathname: string) => {
    if (pathname.startsWith('/uk') || pathname.startsWith('/en')) {
      return pathname.replace(/^\/(uk|en)/, '');
    }

    return pathname;
  };

  const switchLocale = (locale: string) => {
    const newPath = `/${locale}${processPathname(pathname)}`;

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-[16px] p-2">
      <button
        type="button"
        className={cn(
          'text-[10px]/normal font-bold transition-colors xl:text-sm/normal',
          lang === 'uk'
            ? 'text-textAccent'
            : 'text-textSlate hover:text-textPrimary focus:text-textPrimary',
        )}
        onClick={() => switchLocale('uk')}
      >
        {langCode.ua}
      </button>

      <div className="xl:py-1">
        <LineIcon width="2" height="18" className="block h-[18px] w-[2px]" />
      </div>

      <button
        type="button"
        className={cn(
          'text-[10px]/normal font-bold transition-colors xl:text-sm/normal',
          lang === 'en'
            ? 'text-textAccent'
            : 'text-textSlate hover:text-textPrimary focus:text-textPrimary',
        )}
        onClick={() => switchLocale('en')}
      >
        {langCode.en}
      </button>
    </div>
  );
};
