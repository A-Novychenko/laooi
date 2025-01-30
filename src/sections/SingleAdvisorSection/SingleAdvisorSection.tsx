import Link from 'next/link';
import Image from 'next/image';

import { ButtonLink, PostLabel, PostText, Title } from '@/components/ui';

import ArrowIcon from '~/icons/arrowDown.svg';

import { SingleAdvisorSectionProps } from './types';

const testAvisorObj = {
  fullname: 'Таїсія Козюменська',
  city: 'Біловодськ',
  phoneNumber: '+38(095)41-40-94',
  image: {
    src: '/images/bigLogo.png',
    alt: 'big logo',
  },
  description: [
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Це заголовок H2',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Це заголовок H3',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Це звичайний абзац тексту. Тут може бути більше інформації, форматованої у вигляді параграфа.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'blockquote',
      children: [
        {
          _type: 'span',
          text: 'Це цитата, яка повинна мати стиль blockquote.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Ось ще один абзац із ',
        },
        {
          _type: 'span',
          marks: ['strong'],
          text: 'жирним текстом',
        },
        {
          _type: 'span',
          text: ' та ',
        },
        {
          _type: 'span',
          marks: ['em'],
          text: 'курсивом',
        },
        {
          _type: 'span',
          text: '.',
        },
      ],
    },

    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Нижче буде список:',
        },
      ],
    },
    {
      _type: 'list',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Перший елемент списку',
        },
      ],
    },
    {
      _type: 'list',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Другий елемент списку',
        },
      ],
    },
    {
      _type: 'list',
      listItem: 'number',
      children: [
        {
          _type: 'span',
          text: 'Перший елемент нумерованого списку',
        },
      ],
    },
    {
      _type: 'list',
      listItem: 'number',
      children: [
        {
          _type: 'span',
          text: 'Другий елемент нумерованого списку',
        },
      ],
    },
  ],
};

export const SingleAdvisorSection: React.FC<SingleAdvisorSectionProps> = ({
  advisorsBackLink: { label: labelLink, link: advisorsLink },
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

        <Title>{testAvisorObj.fullname}</Title>

        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="overflow-hidden rounded-3xl md:size-[688px] xl:size-[632px]">
            <Image
              src={testAvisorObj.image.src}
              alt={testAvisorObj.image.alt}
              width={688}
              height={688}
              className="size-full object-cover"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <p>{testAvisorObj.city}</p>
              <PostLabel
                type={'news'}
                className="relative right-0 top-0 items-center bg-bgLightSlate"
              >
                {testAvisorObj.phoneNumber}
              </PostLabel>
            </div>

            <PostText body={testAvisorObj.description} />

            <ButtonLink
              type="link"
              typeStyle="primary"
              settings={{ href: 'https://facebook.com', externalLink: true }}
              className="max-w-[380px]"
            >
              Читати у Facebook
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
