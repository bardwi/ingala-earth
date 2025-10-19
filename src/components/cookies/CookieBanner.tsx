'use client';

import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CookiePrefs from './CookiePrefs';
import { allOn, allOff, applyConsent, savePrefs } from '@/lib/consent';

const OPEN_EVENT = 'INGALA_OPEN_COOKIE_PREFS' as const;

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen as unknown as EventListener);
    return () =>
      window.removeEventListener(
        OPEN_EVENT,
        onOpen as unknown as EventListener
      );
  }, []);

  return (
    <>
      <CookieConsent
        location="bottom"
        cookieName="ingala_cc"
        enableDeclineButton
        flipButtons
        buttonText="Accept"
        declineButtonText="Decline"
        expires={180}
        overlay={false}
        style={{
          zIndex: 1500,
          background: '#5B1D0F',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
        }}
        contentStyle={{
          margin: '0 auto',
          maxWidth: '1020px',
          padding: '12px 0',
          lineHeight: 1.6,
          flex: '1 1 auto',
        }}
        buttonStyle={{
          background: '#F09D2E',
          color: '#5B1D0F',
          fontWeight: 700,
          border: 0,
          padding: '10px 16px',
          borderRadius: 0,
          cursor: 'pointer',
        }}
        declineButtonStyle={{
          background: 'transparent',
          color: '#fff',
          border: '2px solid #fff',
          padding: '8px 16px',
          fontWeight: 700,
          borderRadius: 0,
          cursor: 'pointer',
          marginRight: '8px',
        }}
        onAccept={() => {
          const prefs = allOn();
          savePrefs(prefs);
          applyConsent(prefs);
        }}
        onDecline={() => {
          const prefs = allOff();
          savePrefs(prefs);
          applyConsent(prefs);
        }}
      >
        <span style={{ opacity: 0.95 }}>
          We use essential cookies. Optional analytics help us improve the site.
          <Link
            href="/privacy#cookies"
            style={{
              color: '#fff',
              textDecoration: 'underline',
              marginLeft: 8,
            }}
          >
            Learn more
          </Link>
        </span>

        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            marginLeft: 12,
            background: 'transparent',
            color: '#fff',
            border: '2px solid #fff',
            padding: '8px 12px',
            fontWeight: 700,
            borderRadius: 0,
            cursor: 'pointer',
          }}
        >
          Manage
        </button>
      </CookieConsent>

      <CookiePrefs open={open} onClose={() => setOpen(false)} />
    </>
  );
}
