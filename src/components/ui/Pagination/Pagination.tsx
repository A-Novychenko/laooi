'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import ArrowIcon from '~/icons/arrowDown.svg';

import { cn } from '@/utils/cn';

import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', newPage.toString());
      router.push(`?${params.toString()}`);
    }
  };

  const visiblePages = [];
  if (currentPage > 1) visiblePages.push(currentPage - 1);
  visiblePages.push(currentPage);
  if (currentPage < totalPages) visiblePages.push(currentPage + 1);

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <div className="mt-4 flex justify-center gap-1 xl:gap-2">
      <button
        type="button"
        aria-label="prev-page-click"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={cn(
          'flex size-10 items-center justify-center rounded-md border border-none px-4 py-2 md:size-12 xl:size-[54px]',
          isFirstPage
            ? 'cursor-not-allowed text-textFooterAccent'
            : 'cursor-pointer text-textMenuAccent',
        )}
      >
        <ArrowIcon width={24} height={24} className="shrink-0 rotate-90" />
      </button>

      {visiblePages.map(page => (
        <button
          type="button"
          aria-label="number-page"
          key={page}
          onClick={() => handlePageChange(page)}
          className={cn(
            'size-10 rounded-full border-none py-2 text-base/normal font-semibold transition-colors md:size-12 xl:size-14 xl:text-lg',
            page === currentPage
              ? 'bg-textMenuAccent font-bold text-white'
              : 'bg-white hover:bg-bgSlate',
          )}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        aria-label="next-page-click"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={cn(
          'flex size-10 items-center justify-center rounded-md border border-none px-4 py-2 transition-colors md:size-12 xl:size-[54px]',
          isLastPage
            ? 'cursor-not-allowed text-textFooterAccent'
            : 'cursor-pointer text-textMenuAccent',
        )}
      >
        <ArrowIcon width={24} height={24} className="shrink-0 -rotate-90" />
      </button>
    </div>
  );
};

export default Pagination;
