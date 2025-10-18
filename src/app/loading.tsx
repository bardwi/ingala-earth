import Image from 'next/image';
import s from './AppLoading.module.scss';
import type React from 'react';

type CSSVars = React.CSSProperties &
  Record<'--logo' | '--spinner' | '--thick', string>;

export default function AppLoading() {
  const logoSize = 36;
  const spinnerSize = 55;
  const ringThickness = 3;

  const styleVars: CSSVars = {
    '--logo': `${logoSize}px`,
    '--spinner': `${spinnerSize}px`,
    '--thick': `${ringThickness}px`,
  };

  return (
    <div className={s.wrap} role="status" aria-live="polite" style={styleVars}>
      <div className={s.spinner} aria-hidden="true">
        <span className={s.ring} />
        <Image
          src="/images/logo.png"
          alt="Ingala Earth"
          width={logoSize}
          height={logoSize}
          className={s.logo}
          priority
        />
      </div>
      <p className={s.text}>Loading…</p>
    </div>
  );
}
