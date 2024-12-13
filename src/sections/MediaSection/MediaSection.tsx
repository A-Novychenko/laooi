import { ButtonLink, Title } from '@/components/ui';
import { MediaList } from '@/components/base';

import { getLatestMediaItems } from '@/actions/sanity';

export const MediaSection: React.FC<ISectionProps> = async ({ dict, lang }) => {
  const { title, link } = dict.mediaSection;

  const items = await getLatestMediaItems();

  return (
    <>
      {items && items.length >= 5 && (
        <section className="section">
          <div className="container">
            <div className="mb-4 md:flex md:justify-between">
              <Title className="mb-4 md:mb-0">{title}</Title>

              <ButtonLink
                type="link"
                typeStyle="light"
                settings={{
                  ...link.settings,
                  href: `${lang}${link.settings.href}`,
                }}
                className="mx-auto shrink-0 md:mx-0 md:w-[219px] md:max-w-full xl:w-[308px]"
              >
                {link.label}
              </ButtonLink>
            </div>

            <MediaList items={items} type="main" />
          </div>
        </section>
      )}
    </>
  );
};
