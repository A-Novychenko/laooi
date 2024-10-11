import EyeIcon from '~/icons/eye.svg';

export const AccessButton: React.FC = () => {
  return (
    <button className="flex size-8 items-center justify-center rounded-[40px] bg-bgSlate">
      <EyeIcon width="16" height="16" />
    </button>
  );
};
