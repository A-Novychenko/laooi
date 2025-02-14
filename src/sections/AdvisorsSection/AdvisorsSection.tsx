import { AdvisorCard, Title } from '@/components/ui';

import { getAdvisors } from '@/actions/sanity';

import styles from './AdvisorsSection.module.css';

export const AdvisorsSection: React.FC<ISectionProps> = async ({
  dict,
  lang,
}) => {
  const { title, link } = dict.advisorsPage.advisorsSection;

  const { advisors } = await getAdvisors(lang);

  return (
    <>
      {advisors && advisors.length > 0 && (
        <section className="section xl:pb-32">
          <div className="container">
            <Title tag="h2" className="mb-6">
              {title}
            </Title>

            <ul className="flex flex-col gap-[16px] md:flex-row md:flex-wrap">
              {advisors &&
                advisors.map((advisor, idx) => (
                  <li key={idx} className={styles.advisorItem}>
                    <AdvisorCard advisor={advisor} lang={lang} link={link} />
                  </li>
                ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
