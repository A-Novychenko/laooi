import { Footer, Header } from '@/layout';

export default function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <>
      <Header lang={params.lang} />

      <main>{children}</main>

      <Footer />
    </>
  );
}
