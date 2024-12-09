'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { PostType } from './types';

export const CategorySelect = () => {
  const [selectedType, setSelectedType] = useState<PostType | ''>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const typeUrl = searchParams.get('type') as PostType;
    setSelectedType(typeUrl || '');
  }, [searchParams]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value as PostType;

    setSelectedType(selectedValue);

    const params = new URLSearchParams(searchParams.toString());
    if (selectedValue) {
      params.set('type', selectedValue);
    } else {
      params.delete('type');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <label htmlFor="postType">Тип постів</label>
      <select id="postType" value={selectedType} onChange={handleSelectChange}>
        <option value="">Усі</option>
        <option value="news">Новини</option>
        <option value="articles">Статті</option>
        <option value="events">Події</option>
      </select>
    </div>
  );
};
