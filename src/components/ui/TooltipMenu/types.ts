import { ReactNode } from 'react';

export type TooltipMenuProps = {
  children: ReactNode;
  data: IMainNavEmbedded[];
  handleClose?: () => void;
};
