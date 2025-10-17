'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { readPrefs } from '@/lib/consent';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  const pathname = usePathname();
  const search = useSearchParams();
  const enabled = Boolean(GA_ID);

  // Have we already called gtag('config', GA_ID, …)?
  const configuredRef = useRef(false);

  // Configure GA ONLY when analytics is granted (now or later)
  useEffect(() => {
    if (!enabled) return;

    const tryConfig = () => {
      if (configuredRef.current) return;
      if (!readPrefs().analytics) return;

      // Initialize & configure (no cookies until config is called)
      window.gtag?.('js', new Date());
      window.gtag?.('config', GA_ID!, {
        send_page_view: false,
        anonymize_ip: true,
      });
      configuredRef.current = true;

      // Send first page_view
      const firstUrl = location.pathname + location.search;
      window.gtag?.('event', 'page_view', { page_location: firstUrl });
    };

    // Run on mount based on saved prefs
    tryConfig();

    // react to future consent changes
    const onConsent = (e: Event) => {
      const status = (e as CustomEvent<'granted' | 'denied'>).detail;
      if (status === 'granted') tryConfig();
    };
    window.addEventListener(
      'INGALA_CONSENT_CHANGED',
      onConsent as EventListener
    );
    return () =>
      window.removeEventListener(
        'INGALA_CONSENT_CHANGED',
        onConsent as EventListener
      );
  }, [enabled]);

  // page_view on client navigations (only after configured)
  useEffect(() => {
    if (!enabled || !configuredRef.current) return;
    const page_location = pathname + (search?.toString() ? `?${search}` : '');
    window.gtag?.('event', 'page_view', { page_location });
  }, [enabled, pathname, search]);

  if (!enabled) return null;

  return (
    <>
      {/* Run consent default first (order is preserved among afterInteractive scripts) */}
      <Script id="ga-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          // OFF by default until user grants
          gtag('consent', 'default', { analytics_storage: 'denied' });
        `}
      </Script>

      {/* Load GA library (no config here; config happens only after consent) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
