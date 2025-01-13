import { PortableText } from 'next-sanity';

import { ProjectContentProps } from './types';

export const ProjectContent: React.FC<ProjectContentProps> = ({ body }) => {
  return (
    <ul>
      {Array.isArray(body) &&
        body.map(({ title, text }, idx) => (
          <li key={idx}>
            <p>{title}:</p>

            <PortableText
              value={text}
              components={{
                block: {
                  h2: ({ children }) => <h2 className="">{children}</h2>,
                  h3: ({ children }) => <h3 className="">{children}</h3>,
                  normal: ({ children }) => <p className="">{children}</p>,
                },
                list: {
                  bullet: ({ children }) => <ul className="">{children}</ul>,
                  number: ({ children }) => <ol className="">{children}</ol>,
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
                  em: ({ children }) => <em className="italic">{children}</em>,
                  underline: ({ children }) => (
                    <span className="underline">{children}</span>
                  ),
                },
              }}
            />
          </li>
        ))}
    </ul>
  );
};
