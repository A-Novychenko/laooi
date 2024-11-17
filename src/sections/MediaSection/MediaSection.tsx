import { MediaList } from '@/components/base';
import { Title } from '@/components/ui';

export const MediaSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <Title>MediaSection</Title>

        <MediaList />
      </div>
    </section>
  );
};
