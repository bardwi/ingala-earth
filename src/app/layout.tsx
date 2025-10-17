import type { Metadata, Viewport } from 'next';
import './globals.scss';
import { Work_Sans, DM_Serif_Display } from 'next/font/google';
import ScrollTop from '@/components/navigation/ScrollTop/ScrollTop';
import CookieBanner from '@/components/cookies/CookieBanner';
import Analytics from '@/components/analytics/Analytics';
import Script from 'next/script';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F3EFE7' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0B0B' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ingala.earth'),
  title: {
    default: 'Ingala Earth',
    template: '%s · Ingala Earth',
  },
  description: 'Regenerative agroecology, biodiversity & landscape restoration',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    url: 'https://ingala.earth',
    siteName: 'Ingala Earth',
    images: [{ url: '/og/default-og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/default-og.png'],
  },
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
      <body suppressHydrationWarning>
        <Script id="ga4-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('consent', 'default', { 'analytics_storage': 'denied' });
          `}
        </Script>
        <Analytics />
        {children}
        <CookieBanner />
        <ScrollTop />
      </body>
    </html>
  );
}
