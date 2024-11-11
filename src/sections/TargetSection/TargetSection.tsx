import { TargetSliderWrap } from '@/components/base';
import { Gallery, Title } from '@/components/ui';

export const TargetSection: React.FC<ISectionProps> = ({ dict }) => {
  const {
    targetSection: { title, targetGroups, photos },
  } = dict;

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <TargetSliderWrap targetGroups={targetGroups} className="mb-4" />

        <Gallery data={photos} />
      </div>
    </section>
  );
};
