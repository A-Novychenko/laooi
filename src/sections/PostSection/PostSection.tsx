import Link from 'next/link';
import Image from 'next/image';

import {
  DateStamp,
  PostText,
  PostLabel,
  Title,
  ButtonLink,
} from '@/components/ui';
import { PostSliderWrap } from '@/components/base';

import { formatDate } from '@/utils/formatDate';

import ArrowIcon from '~/icons/arrowDown.svg';

export const PostSection: React.FC<{
  post: ITransformedPost;
  postBackLink: IPostBackLink;
  postFBLinkLabel: string;
}> = ({
  postBackLink: { label: labelPostLink, link: blogLink },
  post,
  postFBLinkLabel,
}) => {
  const { type, label, images, title, body, date, link } = post;

  const image = images[0];

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
          <div className="relative mb-4 overflow-hidden rounded-3xl xl:sticky xl:top-4 xl:w-[632px] xl:self-start">
            {images.length > 1 ? (
              <PostSliderWrap data={images} />
            ) : (
              <Image src={image.src} alt={image.alt} width={632} height={632} />
            )}
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <DateStamp>{formattedDate}</DateStamp>

              <PostLabel type={type} typeStyle="secondary">
                {label}
              </PostLabel>
            </div>

            <PostText body={body} />

            <ButtonLink
              type="link"
              typeStyle="primary"
              settings={{ href: link, externalLink: true }}
              className="max-w-[380px]"
            >
              {postFBLinkLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
