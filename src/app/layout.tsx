import type { Metadata } from 'next';
import './globals.scss';
import { Work_Sans, DM_Serif_Display } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Ingala Earth',
  description: 'Regenerative agroecology, biodiversity & landscape restoration',
};

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${dmSerif.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
