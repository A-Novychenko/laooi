import Link from 'next/link';
import Image from 'next/image';

import { Title } from '@/components/ui';

import { getCategoriesSearchResult } from '@/utils/getCategoriesSearchResult';
import { getPhotoUrl } from '@/utils/getSanityPhotoUrl';

import { SearchSectionProps } from './types';
import { formatDate } from '@/utils/formatDate';

export const SearchSection: React.FC<SearchSectionProps> = ({
  lang,
  searchResults,
  categoryTitles,
  linksTitle,
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

              <Link href={`${category === 'post' ? 'blog' : category}`}>
                {linksTitle}&nbsp;{categoryTitles[category]}
              </Link>

              <ul className="flex w-full flex-wrap gap-4 rounded-3xl">
                {items.map(item => {
                  //   console.log('item:', item);

                  return (
                    <li
                      key={item._id}
                      className="w-[400px] rounded-lg bg-gray-100 p-4 shadow-md"
                    >
                      {item.slug ? (
                        <Link
                          href={`${category === 'post' ? 'blog' : category}/${item.slug?.current}`}
                        >
                          <Title
                            tag={'h3'}
                            className="mb-4 line-clamp-4 text-xl/normal"
                          >
                            {item.name?.[lang] || item.title?.[lang]}
                          </Title>

                          {item.images?.[0] && (
                            <div className="h-[240px] w-[300px]">
                              <Image
                                src={getPhotoUrl(item.images?.[0]?.asset._ref)}
                                alt={item.images?.[0].caption?.[lang]}
                                width={288}
                                height={288}
                                className="size-full object-cover"
                              />
                            </div>
                          )}

                          {item.description?.[lang] && (
                            <p className="text-sm text-gray-600">
                              {item.description[lang]}
                            </p>
                          )}

                          {item.publicationDate && (
                            <>
                              <p>
                                Date publication:
                                {formatDate(item.publicationDate)}
                              </p>
                            </>
                          )}
                        </Link>
                      ) : (
                        <>
                          <Title
                            tag={'h3'}
                            className="mb-4 line-clamp-4 text-xl/normal"
                          >
                            {item.name?.[lang] || item.title?.[lang]}
                          </Title>

                          {item.images?.[0] && (
                            <div className="h-[240px] w-[300px]">
                              <Image
                                src={getPhotoUrl(item.images?.[0]?.asset._ref)}
                                alt={item.images?.[0].caption?.[lang]}
                                width={288}
                                height={288}
                                className="size-full object-cover"
                              />
                            </div>
                          )}

                          {item.description?.[lang] && (
                            <p className="line-clamp-4 text-sm">
                              {item.description[lang]}
                            </p>
                          )}
                        </>
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
