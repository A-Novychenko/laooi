import { PortableText } from 'next-sanity';

import { ProjectContentProps } from './types';

export const ProjectContent: React.FC<ProjectContentProps> = ({ body }) => {
  return (
    <ul className="flex flex-col gap-2 xl:w-[632px]">
      {Array.isArray(body) &&
        body.map(({ title, text }, idx) => (
          <li
            key={idx}
            className="flex flex-col gap-2 md:flex-row md:justify-between"
          >
            <p className="text-base/normal font-semibold xl:text-lg">
              {title}:
            </p>
            <div className="md:w-[580px] xl:w-[504px]">
              <PortableText
                value={text}
                components={{
                  block: {
                    h2: ({ children }) => <h2 className="">{children}</h2>,
                    h3: ({ children }) => <h3 className="">{children}</h3>,
                    normal: ({ children }) => (
                      <p className="text-base/normal xl:text-lg">{children}</p>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-outside list-disc pl-8">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal pl-8">{children}</ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="mb-0">{children}</li>
                    ),
                    number: ({ children }) => (
                      <li className="mb-0">{children}</li>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className="font-bold">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic">{children}</em>
                    ),
                    underline: ({ children }) => (
                      <span className="underline">{children}</span>
                    ),
                  },
                }}
              />
            </div>
          </li>
        ))}
    </ul>
  );
};
