import { Nunito } from 'next/font/google';

import { AccessibilityProvider } from '../../context/AccessibilityProvider';

import makeMetaData from '@/data/meta';

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
  const meta = await makeMetaData(lang, 'main');

  return meta;
}

export async function generateStaticParams() {
  return [{ lang: 'uk' }, { lang: 'en' }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <AccessibilityProvider>
      <html lang={params.lang} className="scroll-smooth">
        <body className={`${nunito.variable} antialiased`}>{children}</body>
      </html>
    </AccessibilityProvider>
  );
}
