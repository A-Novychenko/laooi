import { MediaList } from '@/components/base';
import { ButtonLink, Title } from '@/components/ui';

export const MediaSection: React.FC<ISectionProps> = ({ dict }) => {
  const { title, link, items } = dict.mediaSection;

  return (
    <section className="section">
      <div className="container">
        <div className="mb-4 md:flex md:justify-between">
          <Title className="mb-2 md:mb-0">{title}</Title>

          <ButtonLink
            type="link"
            typeStyle="light"
            settings={link.settings}
            className="mx-auto shrink-0 md:mx-0 md:w-[219px] md:max-w-full xl:w-[308px]"
          >
            {link.label}
          </ButtonLink>
        </div>

        <MediaList items={items} />
      </div>
    </section>
  );
};
