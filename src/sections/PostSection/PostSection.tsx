import Link from 'next/link';
import Image from 'next/image';

import { DateStamp, PostText, PostLabel, Title } from '@/components/ui';

import ArrowIcon from '~/icons/arrowDown.svg';

export const PostSection: React.FC<IBlogPostSection> = ({
  linkTitle,
  post,
}) => {
  const { type, image, title, text, date, linkTitle: moreLinkTitle } = post;
  return (
    <section className="pt-20">
      <div className="container">
        <Link
          href={'/'}
          className="mb-6 flex items-center gap-2 text-base/normal font-semibold xl:text-lg/normal"
        >
          <ArrowIcon width={24} height={24} className="rotate-90" />
          {linkTitle}
        </Link>

        <Title className="mb-4">{title}</Title>

        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="mb-4 xl:sticky xl:top-4 xl:min-w-[632px] xl:self-start">
            <Image src={image} alt="image" width={632} height={632} />
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <DateStamp>{date}</DateStamp>

              <PostLabel label={type} typeStyle="secondary">
                {type}
              </PostLabel>
            </div>

            <PostText text={text} />

            <button type="button">{moreLinkTitle}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
