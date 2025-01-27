import Image from 'next/image';

import { ButtonLink, Title } from '@/components/ui';

export const AboutTeamSection: React.FC<ISectionProps> = ({ dict, lang }) => {
  const { title, img, alt, description, btn } = dict.aboutTeamSection;
  const { quotedText, firstParagraph, secondParagraph, thirdParagraph } =
    description;

  return (
    <section className="section">
      <div className="container">
        <Title tag="h1" className="mb-4">
          {title}
        </Title>

        <div className="xl:flex xl:gap-[16px]">
          <div className="mb-2 h-[288px] shrink-0 overflow-hidden rounded-[16px] md:mb-4 md:size-[688px] md:rounded-[20px] xl:sticky xl:top-[7.5rem] xl:mb-0 xl:h-[608px] xl:w-[632px] xl:rounded-[24px]">
            <Image
              src={img}
              alt={alt}
              width={688}
              height={688}
              className="size-full object-cover"
            />
          </div>

          <div className="rounded-[16px] bg-bgLightSlate p-[24px] text-base/normal text-textPrimary md:rounded-[20px] md:p-[32px] xl:flex xl:flex-col xl:rounded-[24px] xl:p-[40px] xl:text-lg/[1.4]">
            <div className="mb-4 xl:mb-6">
              <p className="mb-4">
                <b>{quotedText.advisors}</b>

                {firstParagraph.after}
              </p>

              <p className="mb-4">
                {secondParagraph.before}

                <b>{quotedText.question}</b>

                {secondParagraph.after}
              </p>

              <p>
                {thirdParagraph.before}

                <b>{quotedText.become}</b>

                {thirdParagraph.after}
              </p>
            </div>

            <ButtonLink
              type="link"
              typeStyle="primary"
              settings={{
                ...btn.settings,
                href: `/${lang}${btn.settings.href}`,
              }}
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
