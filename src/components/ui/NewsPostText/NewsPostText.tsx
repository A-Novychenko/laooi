import { NewsPostTextProps } from './types';

export const NewsPostText: React.FC<NewsPostTextProps> = ({ text }) => {
  return (
    <>
      <p className="text-base/normal md:text-lg">{text}</p>
    </>
  );
};
