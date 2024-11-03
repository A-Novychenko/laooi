import { FooterBasementProps } from './types';

export const FooterBasement: React.FC<FooterBasementProps> = ({
  data,
  name,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-textSecondary py-3 text-textLight md:flex-row md:justify-between md:px-4">
      <p className="text-[10px]/normal font-semibold md:text-xs xl:text-sm">
        {data.policy}
      </p>

      <p className="text-[10px]/normal font-semibold md:text-xs xl:text-sm">
        &copy;{name}&nbsp;
        {currentYear}
      </p>

      <p className="text-[10px]/normal font-semibold md:text-xs xl:text-sm">
        {data.developers}
      </p>
    </div>
  );
};
