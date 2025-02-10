'use server';

import Image from 'next/image';
import Link from 'next/link';

import { ReadMoreBtn } from '@/components/ui';

import { cn } from '@/utils/cn';

import FacebookIcon from '~/icons/facebook.svg';
import staticData from '@/data/common.json';

import { TeamCardProps } from './types';

import styles from './TeamCard.module.css';

export const TeamCard: React.FC<TeamCardProps> = ({
  teamMember,
  readMoreLabel,
  isExpanded = false,
  teamClosedLabel,
  className,
}) => {
  const { name, position, description, photo, alt, link, index } = teamMember;

  const { poster, posterAlt } = staticData;

  return (
    <li className={cn('relative self-stretch', styles.card, className)}>
      <div
        className="flex size-full flex-col justify-between rounded-[24px] bg-bgLightSlate p-[16px] xl:p-[24px]"
        data-expanded={isExpanded}
        data-id={index}
      >
        <div className="mb-2 grow md:mb-0">
          <div className="relative mx-auto mb-2 flex size-[96px] md:size-[128px] xl:size-[160px]">
            <div className="size-full shrink-0 overflow-hidden rounded-full">
              <Image
                src={photo ? photo : poster}
                alt={alt ? alt : posterAlt}
                width={160}
                height={160}
                className="size-full object-cover"
              />
            </div>

            <Link
              href={link}
              className={cn(
                'absolute bottom-0 right-0',
                'flex size-[24px] items-center justify-center rounded-full bg-bgAccentDark transition-colors',
                'md:size-[32px]',
                'xl:size-[40px]',
                'hover:bg-bgAccentStrongDark focus:bg-bgAccentStrongDark',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="size-[16px] text-textLight md:size-[20px] xl:size-[24px]" />
            </Link>
          </div>

          <p className="mb-1 text-center text-lg/normal font-bold tracking-[-0.36px] md:text-xl/normal md:tracking-[-0.4px] xl:text-2xl/normal xl:tracking-[-0.48px]">
            {name}
          </p>

          <p className="mb-2 text-center text-sm/normal font-semibold text-textMenuAccent xl:text-base/normal">
            {position}
          </p>

          <p className="line-clamp-[7] text-sm/normal font-semibold xl:line-clamp-6 xl:text-base/normal">
            {description}
          </p>
        </div>

        <ReadMoreBtn
          readMoreLabel={readMoreLabel}
          className="mt-auto"
          cardId={index}
          type={'team'}
          teamClosedLabel={teamClosedLabel}
          teamCard={true}
        />
      </div>
    </li>
  );
};
