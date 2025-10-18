'use client';

import { useEffect, useState } from 'react';
import {
  applyConsent,
  readPrefs,
  savePrefs,
  allOn,
  allOff,
  type ConsentPrefs,
} from '@/lib/consent';

type Props = { open: boolean; onClose: () => void };

export default function CookiePrefs({ open, onClose }: Props) {
  const [prefs, setPrefs] = useState<ConsentPrefs>(readPrefs());

  useEffect(() => {
    const el = document.createElement('style');
    el.innerHTML = `
      /* hide native box but keep it accessible */
      label input { position:absolute; opacity:0; width:1px; height:1px; pointer-events:none; }

      /* OFF track */
      label input + span {
        display:inline-block;
        background:#D9E3D4;               /* OFF color */
        box-shadow: inset 0 0 0 2px #CBD6CB;
        transition: background .15s ease, box-shadow .15s ease;
      }

      /* knob */
      label input + span::after {
        content:''; position:absolute; top:3px; left:3px; width:20px; height:20px;
        border-radius:50%; background:#fff; box-shadow:0 1px 2px rgba(0,0,0,.25);
        transition:left .15s ease;
      }

      /* hover/focus for enabled switches */
      label:not([aria-disabled]) input:hover + span { box-shadow: inset 0 0 0 2px #97AE97; }
      label:not([aria-disabled]) input:focus-visible + span { outline:2px solid #5B1D0F; outline-offset:2px; }

      /* ON track */
      label input:checked + span {
        background:#6A994E;               /* ON color (Ingala green) */
        box-shadow: inset 0 0 0 2px #6A994E;
      }
      label input:checked + span::after { left:23px; }

      /* Essential (disabled look) */
      label[aria-disabled] { cursor:not-allowed; }
      label[aria-disabled] input + span {
        background:#E6E6E6;
        box-shadow: inset 0 0 0 2px #DDDDDD;
        filter: grayscale(.2) opacity(.65);
      }
    `;
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  useEffect(() => {
    if (!open) return;
    setPrefs(readPrefs());
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences"
      style={styles.scrim}
      onClick={(e) => e.currentTarget === e.target && onClose()}
    >
      <div style={styles.card}>
        <h2 style={styles.h2}>Cookie Preferences</h2>
        <p style={styles.p}>
          We use essential cookies to make this site work. You can choose to
          enable optional analytics.
        </p>

        {/* Essential */}
        <div style={styles.row}>
          <div style={styles.col}>
            <div style={styles.title}>Essential</div>
            <div style={styles.muted}>
              Required for security and core functionality.
            </div>
          </div>
          <label style={styles.switchLabel} aria-disabled>
            <input type="checkbox" checked disabled />
            <span style={styles.switch} />
          </label>
        </div>

        {/* Analytics */}
        <div style={styles.row}>
          <div style={styles.col}>
            <div style={styles.title}>Analytics</div>
            <div style={styles.muted}>
              Help us improve the site (anonymous usage metrics).
            </div>
          </div>
          <label style={styles.switchLabel}>
            <input
              type="checkbox"
              checked={prefs.analytics}
              onChange={(e) =>
                setPrefs((p) => ({ ...p, analytics: e.target.checked }))
              }
            />
            <span style={styles.switch} />
          </label>
        </div>

        <div style={styles.actions}>
          <button
            type="button"
            onClick={() => setPrefs(allOff())}
            style={styles.ghost}
          >
            Reject All
          </button>
          <button
            type="button"
            onClick={() => setPrefs(allOn())}
            style={styles.ghost}
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => {
              savePrefs(prefs);
              applyConsent(prefs);
              onClose();
            }}
            style={styles.primary}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  scrim: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.45)',
    display: 'grid',
    placeItems: 'center',
    zIndex: 1500,
  },
  card: {
    width: 'min(640px, 92vw)',
    background: '#fff',
    borderRadius: 12,
    padding: '18px 18px 14px',
    boxShadow: '0 12px 36px rgba(0,0,0,0.25)',
    border: '1px solid #EFE7D9',
  },
  h2: { margin: 0, color: '#5B1D0F', fontSize: 18, fontWeight: 700 },
  p: { margin: '8px 0 14px', color: '#333', lineHeight: 1.6 },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
    gap: 12,
    padding: '12px 0',
    borderTop: '1px solid #EFE7D9',
  },
  col: {},
  title: { color: '#386641', fontWeight: 600 },
  muted: { color: '#5f5f5f', fontSize: 14 },
  switchLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  switch: {
    width: 46,
    height: 26,
    borderRadius: 26,
    position: 'relative',

    transition: 'background .15s ease, box-shadow .15s ease',
  },
  actions: {
    display: 'flex',
    gap: 10,
    justifyContent: 'flex-end',
    marginTop: 14,
  },
  ghost: {
    background: 'transparent',
    color: '#5B1D0F',
    border: '2px solid #5B1D0F',
    fontWeight: 700,
    padding: '8px 12px',
    cursor: 'pointer',
  },
  primary: {
    background: '#F09D2E',
    color: '#5B1D0F',
    fontWeight: 700,
    border: 0,
    padding: '10px 16px',
    cursor: 'pointer',
  },
};
