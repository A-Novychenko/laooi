import { MainTitleProps } from './types';

export const MainTitle: React.FC<MainTitleProps> = ({ children }) => {
  return (
    <h1 className="text-black sm:text-[36px]/[1.22] sm:font-[700] md:text-[44px]/[1.1] xl:text-[56px]/[1.14]">
      {children}
    </h1>
  );
};
