import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Ingala Earth',
  description: 'Regenerative agroecology, biodiversity & landscape restoration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
