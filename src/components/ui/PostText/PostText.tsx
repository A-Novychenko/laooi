import { PostTextProps } from './types';

export const PostText: React.FC<PostTextProps> = ({ text }) => {
  return <p className="text-base/normal md:text-lg">{text}</p>;
};
