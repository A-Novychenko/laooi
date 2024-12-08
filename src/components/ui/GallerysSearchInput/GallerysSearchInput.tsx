'use client';
import { useSearchParams, useRouter } from 'next/navigation';

import { useState } from 'react';

export const GallerysSearchInput: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Search posts by title"
      className="mb-4 w-full rounded-md border border-gray-300 p-2"
    />
  );
};
