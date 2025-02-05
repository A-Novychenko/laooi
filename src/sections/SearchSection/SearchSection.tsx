import {
  ButtonLink,
  DocumentCard,
  PostCard,
  SearchInput,
  TeamCard,
  Title,
} from '@/components/ui';

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
  teamClosedLabel,
  mainTitle,
  searchInputPlaceholder,
}) => {
  const categorizedResults = getCategoriesSearchResult(searchResults);

  return (
    <section className="section">
      <div className="container">
        <div className="pb-8 md:pb-12 xl:pb-16">
          <Title tag={'h1'} className="mb-4">
            {mainTitle}
          </Title>

          <SearchInput
            lang={lang}
            placeholder={searchInputPlaceholder}
            desktop={false}
            searchPage={true}
            className={
              'border border-textActive bg-textLight outline-textActive placeholder:text-textSlate focus:border-transparent xl:h-[56px]'
            }
          />
        </div>

        {Object.keys(categoryTitles).map(category => {
          const title = categoryTitles[category];
          const items = categorizedResults[category];

          if (!items) return null;

          return (
            <div key={category} className="py-8 md:py-12 xl:py-16">
              <div className="mb-4 flex flex-col md:flex-row md:justify-between">
                <div className="mb-2 flex items-center gap-2">
                  <Title className="">{title}</Title>

                  <p className="text-[30px]/normal text-textBlue md:text-[36px] xl:text-[40px]">
                    {items.length}
                  </p>
                </div>

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
                  return (
                    <li
                      key={item._id}
                      className="w-full md:w-[336px] xl:w-[416px]"
                    >
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

                      {category === 'team' && (
                        <>
                          <TeamCard
                            teamMember={{
                              name: item?.name?.[lang] || '',
                              position: item.position?.[lang] || '',
                              description: item.description?.[lang] || '',
                              photo: getPhotoUrl(item.photo?.asset?._ref) || '',
                              alt: item.photo?.caption?.[lang] || '',
                              link: item.link || '',
                              index: item.index || 1,
                            }}
                            readMoreLabel={readMoreLabel}
                            teamClosedLabel={teamClosedLabel}
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
