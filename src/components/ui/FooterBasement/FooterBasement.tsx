import Link from 'next/link';

import { cn } from '@/utils/cn';

import { FooterBasementProps } from './types';

import styles from './FooterBasement.module.css';

export const FooterBasement: React.FC<FooterBasementProps> = ({
  data,
  staticData: { organization, designUrl, developUrl, policyUrl },
  lang,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-textSecondary py-3 text-textLight md:flex-row md:justify-between md:px-4">
      <Link
        href={`/${lang}${policyUrl}`}
        className={cn(
          'relative py-1 text-[10px]/normal font-semibold transition-colors md:text-xs xl:text-sm',
          styles.link,
        )}
      >
        {data.policy}
      </Link>

      <p className="text-[10px]/normal font-semibold md:text-xs xl:text-sm">
        &copy;{organization}&nbsp;
        {currentYear}
      </p>

      <p className="text-[10px]/normal font-semibold md:text-xs xl:text-sm">
        <Link
          href={designUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn('relative py-1 transition-colors', styles.link)}
        >
          {data.designer}
        </Link>
        &nbsp;and&nbsp;
        <Link
          href={developUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn('relative py-1 transition-colors', styles.link)}
        >
          {data.developers}
        </Link>
      </p>
    </div>
  );
};
