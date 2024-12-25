import { AdvisorCard, Title } from '@/components/ui';

import { getAdvisors } from '@/actions/sanity/methods/getAdvisors';

import styles from './AdvisorsSection.module.css';

export const AdvisorsSection: React.FC<ISectionProps> = async ({
  dict,
  lang,
}) => {
  const { title } = dict.advisorsPage.advisorsSection;

  const { advisors } = await getAdvisors(lang);

  return (
    <>
      {advisors && advisors.length > 0 && (
        <section className="section">
          <div className="container">
            <Title tag="h2" className="mb-6">
              {title}
            </Title>

            <ul className="flex flex-col gap-[16px] md:flex-row md:flex-wrap">
              {advisors &&
                advisors.map((advisor, idx) => (
                  <li key={idx} className={styles.advisorItem}>
                    <AdvisorCard advisor={advisor} />
                  </li>
                ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
