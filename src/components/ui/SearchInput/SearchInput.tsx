import SearchIcon from '~/icons/search.svg';

import { SearchInputProps } from './types';

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  return (
    <div className="relative">
      <input
        className="h-[32px] w-[102px] rounded-[40px] border py-2 pl-8 pr-2 text-[14px] font-bold"
        type="search"
        name="header-search-input"
        placeholder={placeholder}
      />
      <SearchIcon
        width="12"
        height="12"
        className="absolute left-3 top-1/2 translate-y-1/2"
      />
    </div>
  );
};
