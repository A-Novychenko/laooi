import { ButtonLink, Title } from '@/components/ui';

import { cn } from '@/utils/cn';

import styles from './ActivitiesSection.module.css';

export const ActivitiesSection: React.FC<ISectionProps> = ({
  dict: { activitiesSection },
  lang,
}) => {
  const { title, description, link, items } = activitiesSection;

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <div className="xl:mb-4 xl:flex xl:gap-4">
          <p className="mb-2 xl:mb-0">{description}</p>

          <div className="mx-auto mb-4 md:mx-0 md:max-w-[237px] xl:mb-0 xl:w-full xl:max-w-[370px] xl:whitespace-nowrap">
            <ButtonLink
              type="link"
              typeStyle="secondary"
              settings={{
                ...link.settings,
                href: `${lang}${link.settings.href}`,
              }}
            >
              {link.label}
            </ButtonLink>
          </div>
        </div>

        <ul className="flex flex-col gap-4 md:flex-row md:flex-wrap xl:flex-nowrap">
          {items &&
            items.map(({ quantity, text }, idx) => (
              <li
                key={idx}
                className={cn(
                  'rounded-2xl bg-bgLightSlate p-4 md:rounded-[20px] md:p-6',
                  styles.item,
                )}
              >
                <p className="mb-2 text-[30px]/[1.27] font-bold text-textMenuAccent md:text-[32px]/[1.13] xl:text-[36px]/normal">
                  {quantity}
                </p>

                <p className="text-sm/normal font-semibold xl:text-base/normal">
                  {text}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
