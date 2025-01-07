import { PortableText } from 'next-sanity';

import { PrivacyPolicyPortableTextProps } from './types';

export const PrivacyPolicyPortableText: React.FC<
  PrivacyPolicyPortableTextProps
> = ({ value }) => {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          h2: ({ children }) => (
            <h2 className="mb-4 pt-4 text-lg/normal font-bold tracking-[-0.36px] first:pt-0 md:text-xl/normal md:tracking-[-0.4px] xl:pt-6 xl:text-2xl/normal xl:tracking-[-0.48px]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 text-base/normal font-bold tracking-[-0.36px] md:text-lg/normal md:tracking-[-0.4px] xl:text-xl/normal xl:tracking-[-0.48px]">
              {children}
            </h3>
          ),
          normal: ({ children }) => (
            <p className="mb-4 text-base/normal xl:text-lg/normal">
              {children}
            </p>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="mb-4 list-disc pl-6 text-base/normal xl:text-lg/normal">
              {children}
            </ul>
          ),
          number: ({ children }) => (
            <ol className="mb-4 list-decimal pl-6 text-base/normal xl:text-lg/normal">
              {children}
            </ol>
          ),
        },
        listItem: {
          bullet: ({ children }) => <li className="mb-0">{children}</li>,
          number: ({ children }) => <li className="mb-0">{children}</li>,
        },
        marks: {
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          underline: ({ children }) => (
            <span className="underline">{children}</span>
          ),
        },
      }}
    />
  );
};
