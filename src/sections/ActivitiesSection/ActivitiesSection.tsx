import { ActivitiesCard, ButtonLink, Title } from '@/components/ui';

import { ActivitiesSectionProps } from './types';

import styles from './ActivitiesSection.module.css';

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  dict: { activitiesSection },
  lang,
  activities,
  isMainPage = false,
}) => {
  const { title, description, link } = activitiesSection;

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>
        {isMainPage && (
          <div className="xl:mb-4 xl:flex xl:gap-4">
            <p className="mb-2 xl:mb-0">{description}</p>

            <div className="mx-auto mb-4 md:mx-0 md:max-w-[237px] xl:mb-0 xl:w-full xl:max-w-[370px] xl:whitespace-nowrap">
              <ButtonLink
                type="link"
                typeStyle="secondary"
                settings={{
                  ...link.settings,
                  href: `${lang}${link.settings.href}#activities-list`,
                }}
              >
                {link.label}
              </ButtonLink>
            </div>
          </div>
        )}

        <ul
          id="activities-list"
          className="flex flex-col gap-[16px] md:flex-row md:flex-wrap"
        >
          {activities &&
            activities.map(({ quantity, text }, idx) => (
              <li key={idx} className={styles.item}>
                <ActivitiesCard quantity={quantity} text={text} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
