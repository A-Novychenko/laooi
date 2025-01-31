import Link from 'next/link';
import Image from 'next/image';

import { ButtonLink, PostLabel, PostText, Title } from '@/components/ui';

import { cn } from '@/utils/cn';

import ArrowIcon from '~/icons/arrowDown.svg';

import { SingleAdvisorSectionProps } from './types';

import styles from './SingleAdvisorSection.module.css';

export const SingleAdvisorSection: React.FC<SingleAdvisorSectionProps> = ({
  advisorsBackLink: { label: labelLink, link: advisorsLink },
  advisor: { photo, alt, name, city, phone, body, link },
  postFBLinkLabel,
}) => {
  return (
    <section className="section">
      <div className="container">
        <Link
          href={advisorsLink}
          className="mb-6 flex items-center gap-2 text-base/normal font-semibold xl:text-lg/normal"
        >
          <ArrowIcon width={24} height={24} className="rotate-90" />
          {labelLink}
        </Link>

        <Title className="mb-4">{name}</Title>

        <div className="flex flex-col gap-4 xl:flex-row">
          <div
            className={cn(
              'max-h-[448px] overflow-hidden rounded-3xl md:size-[688px] md:max-h-full xl:sticky xl:top-[7.5rem] xl:size-[632px]',
              styles.photo,
            )}
          >
            <Image
              src={photo}
              alt={alt}
              width={688}
              height={688}
              className="size-full object-cover"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <p>{city}</p>

              <PostLabel
                type={'news'}
                className="relative right-0 top-0 items-center bg-bgLightSlate"
              >
                {phone}
              </PostLabel>
            </div>

            <PostText body={body} />

            <ButtonLink
              type="link"
              typeStyle="primary"
              settings={{ href: link, externalLink: true }}
              className="w-full md:w-60 xl:w-[308px]"
            >
              {postFBLinkLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
