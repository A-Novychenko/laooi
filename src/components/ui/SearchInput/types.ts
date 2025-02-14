import { Dispatch, SetStateAction } from 'react';

export type SearchInputProps = {
  placeholder: string;
  desktop?: boolean | undefined;
  lang: string;
  searchPage?: boolean | undefined;
  className?: string;
  closeMenu?: Dispatch<SetStateAction<boolean>> | undefined;
};
