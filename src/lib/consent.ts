export type ConsentPrefs = { essential: true; analytics: boolean };

const KEY = 'ingala_prefs';
export const defaultPrefs: ConsentPrefs = { essential: true, analytics: false };

export function readPrefs(): ConsentPrefs {
  try {
    return JSON.parse(localStorage.getItem(KEY) || 'null') || defaultPrefs;
  } catch {
    return defaultPrefs;
  }
}

export function savePrefs(p: ConsentPrefs) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {}
}

function deleteCookiesByPrefix(prefix: string) {
  if (typeof document === 'undefined' || typeof location === 'undefined')
    return;
  document.cookie.split(';').forEach((p) => {
    const [raw] = p.split('=');
    const name = raw?.trim();
    if (!name || !name.startsWith(prefix)) return;
    document.cookie = `${name}=; Max-Age=0; Path=/`;
    const base = location.hostname.replace(/^www\./, '');
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${base}`;
  });
}

export function applyConsent(p: ConsentPrefs) {
  if (typeof window === 'undefined') return;
  const status: 'granted' | 'denied' = p.analytics ? 'granted' : 'denied';
  window.gtag?.('consent', 'update', { analytics_storage: status });
  if (status === 'denied') {
    deleteCookiesByPrefix('_ga');
    deleteCookiesByPrefix('_gid');
    deleteCookiesByPrefix('_gat');
  }
  window.dispatchEvent(
    new CustomEvent('INGALA_CONSENT_CHANGED', { detail: status })
  );
}

export const allOn = (): ConsentPrefs => ({ essential: true, analytics: true });
export const allOff = (): ConsentPrefs => ({
  essential: true,
  analytics: false,
});
