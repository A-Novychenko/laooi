import { Nunito } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Footer, Header } from '@/layout';
import { ScrollToTopButton } from '@/components/ui';

import { AccessibilityProvider } from '@/context';

import makeMetaData from '@/data/meta';

import '../globals.css';

const nunito = Nunito({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-nunito',
  display: 'swap',
  adjustFontFallback: false,
});

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

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
  params: { lang: 'uk' | 'en' };
}>) {
  return (
    <AccessibilityProvider>
      <html lang={params.lang} className="scroll-smooth">
        <body className={`${nunito.variable} antialiased`}>
          <div className="page-wrap">
            <Header lang={params.lang} />

            <main className="flex grow flex-col">{children}</main>

            <Footer lang={params.lang} />

            <ScrollToTopButton />
          </div>
        </body>

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </html>
    </AccessibilityProvider>
  );
}
