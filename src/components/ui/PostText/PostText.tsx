import { PortableText } from 'next-sanity';

import { PostTextProps } from './types';

export const PostText: React.FC<PostTextProps> = ({ body }) => {
  return (
    <div
      className={'mx-auto mb-4 flex flex-col gap-1 xl:mb-6 xl:max-w-[632px]'}
    >
      <PortableText
        value={body}
        components={{
          block: {
            h2: ({ children }) => (
              <h2 className="text-base/normal font-bold md:text-lg">
                {children}
              </h2>
            ),
            h3: ({ children }) => <h3 className="">{children}</h3>,
            normal: ({ children }) => (
              <p className="text-base/normal md:text-lg">{children}</p>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-textActive bg-bgLightSlate pl-4 text-base/normal font-bold italic text-textMenuAccent md:text-lg">
                {children}
              </blockquote>
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
            link: ({ value, children }) => (
              <a
                href={value.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-base/normal font-bold text-textBlue hover:underline md:text-lg"
              >
                {children}
              </a>
            ),
          },
        }}
      />
    </div>
  );
};
