import Link from 'next/link';

import { cn } from '@/utils/cn';

import PdfIcon from '~/icons/pdf.svg';
import ArrowIcon from '~/icons/arrowBtnIcon.svg';
import DownloadIcon from '~/icons/download.svg';

import { DocumentCardProps } from './types';

import styles from './DocumentCard.module.css';

export const DocumentCard: React.FC<DocumentCardProps> = ({
  doc: { title, fileUrl },
  fileLinks: { openFileLabel, downloadFileLabel },
}) => {
  return (
    <div className="flex h-full items-center gap-2 rounded-2xl bg-bgLightSlate p-4 md:p-5 xl:p-6">
      <PdfIcon className="size-10 shrink-0 md:size-11 xl:size-12" />

      <div>
        <p
          className={cn(
            'mb-1 text-lg/normal font-bold tracking-[-0.36px] text-textMenuAccent',
            'md:text-xl/normal md:tracking-[-0.4px]',
            'xl:text-2xl/normal xl:tracking-[-0.48px]',
            'break-word',
            styles.title,
          )}
        >
          {title}
        </p>

        <div className="flex flex-wrap gap-[8px] text-sm/[1.38] md:gap-x-[16px] md:gap-y-[8px] xl:text-base/[1.38]">
          <Link
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-[4px] xl:gap-[8px]"
          >
            {openFileLabel}

            <ArrowIcon className="size-4 shrink-0 md:size-5 xl:size-6" />
          </Link>

          <Link
            href={`/api/download?fileUrl=${encodeURIComponent(fileUrl)}&title=${encodeURIComponent(title)}`}
            locale={false}
            download={title}
            className="flex items-center md:gap-[4px] xl:gap-[8px]"
          >
            {downloadFileLabel}

            <DownloadIcon className="size-4 shrink-0 md:size-5 xl:size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
