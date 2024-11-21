import { ReactNode } from 'react';

export type AccordionMenuProps = {
  children: ReactNode;
  data: IMainNavEmbedded[];
  handleClose?: () => void;
};
