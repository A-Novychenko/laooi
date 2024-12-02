import { DateStampProps } from './types';

export const DateStamp: React.FC<DateStampProps> = ({ children }) => {
  return (
    <>
      <p className="flex items-center text-base xl:text-lg">{children}</p>
    </>
  );
};
