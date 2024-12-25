import Image from 'next/image';

import { ButtonLink, Title } from '@/components/ui';

export const AdvisorsHeroSection: React.FC<ISectionProps> = ({ dict }) => {
  const {
    title,
    description,
    firstImg,
    firstImgAlt,
    secondImg,
    secondImgAlt,
    btn,
  } = dict.advisorsPage.advisorsHeroSection;

  const { quotedText, firstParagraph, secondParagraph, thirdParagraph } =
    description;

  return (
    <section className="section">
      <div className="container">
        <Title tag="h1" className="mb-4 xl:mb-6 xl:text-5xl">
          {title}
        </Title>

        <div className="xl:flex xl:flex-row-reverse xl:gap-x-[16px]">
          <div className="mb-2 flex flex-col gap-x-[16px] gap-y-4 md:mb-4 md:flex-row xl:mb-0 xl:flex-col">
            <div className="shrink-0 overflow-hidden rounded-[16px] md:h-[226px] md:w-[336px] md:rounded-[20px] xl:h-[233px] xl:w-[416px] xl:rounded-[24px]">
              <Image
                src={firstImg}
                alt={firstImgAlt}
                width={416}
                height={234}
                className="size-full object-cover"
              />
            </div>

            <div className="shrink-0 overflow-hidden rounded-[16px] md:h-[226px] md:w-[336px] md:rounded-[20px] xl:h-[233px] xl:w-[416px] xl:rounded-[24px]">
              <Image
                src={secondImg}
                alt={secondImgAlt}
                width={416}
                height={234}
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-[16px] bg-bgLightSlate p-[24px] text-base/normal text-textPrimary md:rounded-[20px] md:p-[32px] xl:flex xl:flex-col xl:justify-between xl:rounded-[24px] xl:p-[40px] xl:text-lg/normal">
            <p className="mb-6">
              <b>{quotedText.advisors}</b>

              {firstParagraph.after}
            </p>

            <p className="mb-6">
              {secondParagraph.before}

              <b>{quotedText.question}</b>

              {secondParagraph.after}
            </p>

            <p className="mb-4 xl:mb-6">
              {thirdParagraph.before}

              <b>{quotedText.become}</b>

              {thirdParagraph.after}
            </p>

            <ButtonLink
              type="link"
              typeStyle="primary"
              settings={btn.settings}
              className="md:w-60 xl:w-[19.25rem]"
            >
              {btn.btnLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
