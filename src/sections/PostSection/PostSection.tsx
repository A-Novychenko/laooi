import Link from 'next/link';
import Image from 'next/image';

import {
  DateStamp,
  PostText,
  PostLabel,
  Title,
  ButtonLink,
  ProjectContent,
} from '@/components/ui';
import { PostSliderWrap } from '@/components/base';

import { formatDate } from '@/utils/formatDate';

import staticData from '@/data/common.json';

import ArrowIcon from '~/icons/arrowDown.svg';

export const PostSection: React.FC<{
  post: IPostBlogPage;
  postBackLink: IPostBackLink;
  postFBLinkLabel?: string;
  pageName?: string;
  donorTitle?: string;
}> = ({
  postBackLink: { label: labelPostLink, link: blogLink },
  post,
  postFBLinkLabel,
  pageName,
  donorTitle,
}) => {
  const {
    type,
    label,
    images,
    title,
    body,
    date,
    link,
    deadline,
    projectYear,
    donor,
  } = post;

  const image = Array.isArray(images) && images[0];

  const { poster, posterAlt } = staticData;

  const formattedDate = formatDate(date);

  return (
    <section className="section">
      <div className="container">
        <Link
          href={blogLink}
          className="mb-6 flex items-center gap-2 text-base/normal font-semibold xl:text-lg/normal"
        >
          <ArrowIcon width={24} height={24} className="rotate-90" />
          {labelPostLink}
        </Link>

        <Title className="mb-4">{title}</Title>

        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="relative mb-4 overflow-hidden rounded-3xl xl:sticky xl:top-[7.5rem] xl:w-[632px] xl:self-start">
            {Array.isArray(images) && images.length > 1 ? (
              <PostSliderWrap data={images} />
            ) : (
              <>
                {image && (
                  <div className="overflow-hidden rounded-3xl md:size-[688px] xl:size-[632px]">
                    <Image
                      src={image?.src ? image?.src : poster}
                      alt={image?.alt ? image?.alt : posterAlt}
                      width={688}
                      height={688}
                      className="size-full object-cover"
                      priority
                    />
                  </div>
                )}
              </>
            )}
          </div>

          <div className="xl:w-[632px]">
            <div className="mb-2 flex justify-between">
              <DateStamp>{formattedDate}</DateStamp>

              <PostLabel type={type} typeStyle="secondary">
                {label && label}
                {deadline && formatDate(deadline)}
                {projectYear && projectYear}
              </PostLabel>
            </div>

            {donor && (
              <div className="mb-2 flex flex-col gap-2 md:flex-row md:justify-between">
                <p className="text-base/normal font-semibold xl:text-lg">
                  {donorTitle}:
                </p>
                <p className="text-left text-base/normal md:w-[580px] xl:w-[504px] xl:text-lg">
                  {donor}
                </p>
              </div>
            )}
            {pageName !== 'projects' && <PostText body={body} />}

            {pageName === 'projects' && <ProjectContent body={body} />}

            {postFBLinkLabel && link && (
              <ButtonLink
                type="link"
                typeStyle="primary"
                settings={{ href: link, externalLink: true }}
                className="w-full md:w-60 xl:w-[308px]"
              >
                {postFBLinkLabel}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
