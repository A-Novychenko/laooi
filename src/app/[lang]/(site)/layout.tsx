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
      <div className="flex min-h-screen flex-col">
        <Header lang={params.lang} />

        <main className="grow">{children}</main>

        <Footer lang={params.lang} />
      </div>
    </>
  );
}
