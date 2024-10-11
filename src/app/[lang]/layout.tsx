import { Nunito } from 'next/font/google';

import { Footer, Header } from '@/layout';

import { getDictionary } from './dictionaries';

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
  const dictionary = await getDictionary(lang);

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
      <body className={`${nunito.variable} antialiased`}>
        <Header lang={params.lang} />

        {children}

        <Footer />
      </body>
    </html>
  );
}
