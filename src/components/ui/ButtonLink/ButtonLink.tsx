import Link from 'next/link';

import { cn } from '@/utils/cn';

import ArrowBtnIcon from '~/icons/arrowBtnIcon.svg';

import { ButtonProps } from './types';

export const ButtonLink: React.FC<ButtonProps> = ({
  children,
  typeStyle = 'primary',
  icon = true,
  type,
  settings,
  className,
  disabled = false,
}) => {
  const baseStyles =
    'flex items-center justify-center gap-2 rounded-[32px] px-8 py-[10px] md:py-[12px] xl:py-4 text-base/normal font-semibold transition-colors xl:text-lg/normal text-textLight pointer';

  const stylesVariants = {
    primary:
      'bg-bgAccentDark hover:bg-bgAccentStrongDark focus:bg-bgAccentStrongDark',
    secondary: 'bg-bgAccentLight hover:bg-bgAccentDark focus:bg-bgAccentDark',
    light:
      'text-sm/normal xl:text-base/normal text-textPrimary bg-bgSlate hover:bg-bgDarkSlate focus:bg-bgDarkSlate',
    transparent:
      'gap-2 p-0 rounded-none text-textMenuAccent hover:text-textAccent focus:text-textAccent',
  };

  const resultStyle = cn(baseStyles, stylesVariants[typeStyle], className);

  return (
    <>
      {type === 'button' && (
        <button
          type={settings.type ? settings.type : 'button'}
          onClick={settings.action}
          className={resultStyle}
          disabled={disabled}
        >
          {children}

          {icon && <ArrowBtnIcon width={24} height={24} />}
        </button>
      )}

      {type === 'link' && (
        <Link
          href={settings.href}
          className={resultStyle}
          target={settings.externalLink ? '_blank' : '_self'}
          rel={settings.externalLink ? 'noopener noreferrer' : ''}
        >
          {children}

          {icon && <ArrowBtnIcon width={24} height={24} />}
        </Link>
      )}
    </>
  );
};
