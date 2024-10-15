import { TestPage } from '@/components/base/TestPage/TestPage';
import { getDictionary } from '@/utils/dictionaries';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <TestPage textTest={dict.common.logoAlt} />
    </>
  );
}
