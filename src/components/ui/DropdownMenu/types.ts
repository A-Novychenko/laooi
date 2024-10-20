import { ReactNode } from 'react';

type Align = 'start' | 'end';
type Placement = 'top' | 'right' | 'bottom' | 'left';
type BaseAnchorProps = {
  gap: number | string;
  offset: number | string;
  padding: number | string;
};

type AnchorProps =
  | false
  | (`${Placement}` | `${Placement} ${Align}`)
  | Partial<
      BaseAnchorProps & {
        to: `${Placement}` | `${Placement} ${Align}`;
      }
    >;

export type DropdownMenuProps = {
  children: ReactNode;
  dataForButtons?: DataForButtons[];
  dataForLinks?: DataForLinks[];
  menuPosition?: AnchorProps;
};

type DataForButtons = {
  action: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
  text: string;
};

type DataForLinks = {
  href: string;
  className: string;
  text: string;
};
