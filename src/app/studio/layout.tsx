import '../globals.css';

export const metadata = {
  title: 'LAOOI',
  description: 'LAOOI',
  icons: {
    icon: [
      {
        url: '/meta/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}