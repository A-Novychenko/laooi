import Link from 'next/link';

import { Title } from '@/components/ui';

import { getCategoriesSearchResult } from '@/utils/getCategoriesSearchResult';

import { SearchSectionProps } from './types';

export const SearchSection: React.FC<SearchSectionProps> = ({
  lang,
  searchResults,
  categoryTitles,
}) => {
  const categorizedResults = getCategoriesSearchResult(searchResults);

  return (
    <section className="section">
      <div className="container">
        {Object.keys(categoryTitles).map(category => {
          const title = categoryTitles[category];
          const items = categorizedResults[category];

          //   console.log('CATEGORY: ' + category);

          if (!items) return null;

          return (
            <div key={category} className="mb-10">
              <Title className="mb-4 text-base">
                {title} ({items.length})
              </Title>

              <ul className="flex w-full flex-wrap gap-4 rounded-3xl">
                {items.map(item => {
                  //   console.log('item:', item);
                  return (
                    <li
                      key={item._id}
                      className="w-[400px] rounded-lg bg-gray-100 p-4 shadow-md"
                    >
                      <Title tag={'h3'}>
                        {item.name?.[lang] || item.title?.[lang]}
                      </Title>

                      {item.description?.[lang] && (
                        <p className="text-sm text-gray-600">
                          {item.description[lang]}
                        </p>
                      )}

                      {item.slug && (
                        <Link
                          href={`${category === 'post' ? 'blog' : category}/${item.slug?.current}`}
                        >
                          Link
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
