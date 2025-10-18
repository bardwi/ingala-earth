import React from 'react';
import type { ElementType } from 'react';
import styles from '@/styles/bands.module.scss';

type Tone = 'ecru' | 'fog' | 'ivory';

type BandProps = React.PropsWithChildren<{
  tone?: Tone;
  as?: ElementType;
  className?: string;
}>;

export default function Band({
  tone = 'ivory',
  as: Tag = 'section',
  className,
  children,
}: BandProps) {
  const toneClass =
    tone === 'ecru'
      ? styles.toneEcru
      : tone === 'fog'
      ? styles.toneFog
      : styles.toneIvory;

  const Comp = Tag as ElementType;
  return (
    <Comp
      className={[styles.band, styles.full, toneClass, className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Comp>
  );
}
