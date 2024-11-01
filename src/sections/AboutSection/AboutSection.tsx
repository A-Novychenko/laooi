import Image from 'next/image';

import { Title, ButtonLink } from '@/components/ui';

import { AboutSectionProps } from './types';

export const AboutSection: React.FC<AboutSectionProps> = ({ dict }) => {
  console.log('dict', dict);
  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">Про огранізацію</Title>

        <div className="xl:flex xl:gap-4">
          <div className="mb-2 shrink-0 overflow-hidden rounded-2xl md:mb-4 md:h-[688px] md:rounded-[20px] xl:mb-0 xl:h-[394px] xl:w-[632px] xl:rounded-3xl">
            <Image
              src="/images/about.webp"
              alt="photo"
              width={1006}
              height={669}
              className="size-full object-cover"
            />
          </div>

          <div className="rounded-2xl bg-bgLightSlate p-6 md:rounded-[20px] md:p-8 xl:flex xl:flex-col xl:justify-between xl:rounded-3xl xl:p-10">
            <p className="mb-4 text-base/normal text-textPrimary xl:text-lg/normal">
              <span className="mb-2 inline-block">
                «Луганська асоціація організацій осіб з інвалідністю», заснована
                25 травня 2018 року, допомагає людям з інвалідністю та
                забезпечує їм рівні можливості. Ми є провідною організацією на
                сході України в питаннях соціальної інтеграції та захисту прав
                людей з інвалідністю, прагнучи покращити їхнє життя
              </span>
              Громадська спілка забезпечує соціальну підтримку, захищає права
              людей з інвалідністю, сприяє їхній соціальній інтеграції, розвитку
              доступної інфраструктури, просвітленню суспільства, розвитку
              професійних навичок і залученню осіб з інвалідністю до діяльності.
            </p>

            <div className="mr-auto inline-block">
              <ButtonLink
                type="link"
                typeStyle="transparent"
                settings={{ href: '', externalLink: false }}
              >
                Дізнатися більше
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
