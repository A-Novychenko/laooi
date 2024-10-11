import { Nunito } from 'next/font/google';

import { getDictionary } from '../../utils/dictionaries';

import '../globals.css';

const nunito = Nunito({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary: IDictionary = await getDictionary(lang);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
  };
}

export async function generateStaticParams() {
  return [{ lang: 'uk' }, { lang: 'uk' }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang} className="scroll-smooth">
      <body className={`${nunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
