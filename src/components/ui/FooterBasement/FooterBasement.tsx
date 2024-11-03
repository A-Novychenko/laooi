import Link from 'next/link';

import { cn } from '@/utils/cn';

import { FooterBasementProps } from './types';

import styles from './FooterBasement.module.css';

export const FooterBasement: React.FC<FooterBasementProps> = ({
  data,
  name,
  lang,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-textSecondary py-3 text-textLight md:flex-row md:justify-between md:px-4">
      <Link
        href={`${lang}/term`}
        className={cn(
          'relative py-1 text-[10px]/normal font-semibold transition-colors hover:text-textFooterAccent focus:text-textFooterAccent md:text-xs xl:text-sm',
          styles.link,
        )}
      >
        {data.policy}
      </Link>

      <p className="text-[10px]/normal font-semibold md:text-xs xl:text-sm">
        &copy;{name}&nbsp;
        {currentYear}
      </p>

      <p className="text-[10px]/normal font-semibold md:text-xs xl:text-sm">
        <Link
          href={'https://www.behance.net/juliakopytko'}
          className={cn(
            'relative py-1 transition-colors hover:text-textFooterAccent focus:text-textFooterAccent',
            styles.link,
          )}
        >
          {data.designer}
        </Link>
        &nbsp;and&nbsp;
        <Link
          href={'https://www.webdevsynergy.com.ua'}
          className={cn(
            'relative py-1 transition-colors hover:text-textFooterAccent focus:text-textFooterAccent',
            styles.link,
          )}
        >
          {data.developers}
        </Link>
      </p>
    </div>
  );
};
