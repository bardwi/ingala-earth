type GtagConsentAction = 'default' | 'update';
type GtagConsentParams = { analytics_storage: 'granted' | 'denied' };

type GtagArgs =
  | ['js', Date]
  | ['config', string, Record<string, unknown>?]
  | ['event', string, Record<string, unknown>?]
  | ['consent', GtagConsentAction, GtagConsentParams];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

export {};
