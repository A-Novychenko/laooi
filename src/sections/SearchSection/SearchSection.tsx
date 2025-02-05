import { ButtonLink, DocumentCard, PostCard, Title } from '@/components/ui';

import { getCategoriesSearchResult } from '@/utils/getCategoriesSearchResult';
import { getPhotoUrl } from '@/utils/getSanityPhotoUrl';
import { getFileUrl } from '@/utils/getFileUrl';

import { SearchSectionProps } from './types';

export const SearchSection: React.FC<SearchSectionProps> = ({
  lang,
  searchResults,
  categoryTitles,
  linksTitle,
  readMoreLabel,
  fileLinks,
  labelTitle,
}) => {
  const categorizedResults = getCategoriesSearchResult(searchResults);

  return (
    <section className="section">
      <div className="container">
        {Object.keys(categoryTitles).map(category => {
          const title = categoryTitles[category];
          const items = categorizedResults[category];

          if (!items) return null;

          return (
            <div key={category} className="mb-10">
              <div className="mb-4 flex items-center justify-between">
                <Title className="">
                  {title} ({items.length})
                </Title>

                <ButtonLink
                  type={'link'}
                  settings={{
                    href: `${category === 'post' ? 'blog' : category}`,
                    externalLink: false,
                  }}
                  typeStyle={'light'}
                >
                  {linksTitle}
                </ButtonLink>
              </div>

              <ul className="flex w-full flex-wrap gap-4 rounded-3xl">
                {items.slice(0, 6).map(item => {
                  console.log('ITEM', item);
                  return (
                    <li key={item._id} className="w-[416px]">
                      {category === 'projects' && (
                        <>
                          <PostCard
                            pageName={category}
                            lang={lang}
                            readMoreLabel={readMoreLabel}
                            post={{
                              projectYear: item.projectYear,
                              image: getPhotoUrl(
                                item.images?.[0]?.asset._ref || '',
                              ),
                              imageAlt: item.images?.[0].caption?.[lang],
                              title: item.title?.[lang] || '',
                              date: item.publicationDate || '',
                              slug: item.slug?.current || '',
                              label: item.title?.[lang] || '',
                            }}
                          />
                        </>
                      )}

                      {category === 'research' && (
                        <>
                          <DocumentCard
                            doc={{
                              title: item?.title?.[lang] || '',
                              fileUrl: getFileUrl(item.file?.asset?._ref) || '',
                            }}
                            fileLinks={fileLinks}
                          />
                        </>
                      )}

                      {category === 'documents' && (
                        <>
                          <DocumentCard
                            doc={{
                              title: item?.title?.[lang] || '',
                              fileUrl: getFileUrl(item.file?.asset?._ref) || '',
                            }}
                            fileLinks={fileLinks}
                          />
                        </>
                      )}

                      {category === 'post' && (
                        <>
                          <PostCard
                            pageName={'blog'}
                            lang={lang}
                            readMoreLabel={readMoreLabel}
                            post={{
                              type: item.postType,
                              image: getPhotoUrl(
                                item.images?.[0]?.asset._ref || '',
                              ),
                              imageAlt: item.images?.[0].caption?.[lang],
                              title: item.title?.[lang] || '',
                              // text: item.body?.[lang],
                              date: item.publicationDate || '',
                              slug: item.slug?.current || '',
                              label: item.postType || '',
                            }}
                          />
                        </>
                      )}

                      {category === 'tenders' && (
                        <>
                          <PostCard
                            pageName={category}
                            lang={lang}
                            readMoreLabel={readMoreLabel}
                            labelTitle={labelTitle}
                            post={{
                              deadline: item.deadline || '',
                              image: getPhotoUrl(
                                item.images?.[0]?.asset._ref || '',
                              ),
                              imageAlt: item.images?.[0].caption?.[lang],
                              title: item.title?.[lang] || '',
                              // text: item.body?.[lang],
                              date: item.publicationDate || '',
                              slug: item.slug?.current || '',
                              label: item.deadline || '',
                            }}
                          />
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
