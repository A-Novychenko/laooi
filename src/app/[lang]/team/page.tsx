import { getDictionary } from '@/utils/dictionaries';

const TeamPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <p className="hidden">{dict.toString()}</p>
    </>
  );
};

export default TeamPage;
