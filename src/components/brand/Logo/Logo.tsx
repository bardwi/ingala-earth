'use client';

import Image from 'next/image';
import Link from 'next/link';
import s from './Logo.module.scss';

export default function Logo({ size = 80 }: { size?: number }) {
  return (
    <Link href="/" className={s.logo} aria-label="Ingala Home">
      <Image
        src="/logo.png"
        alt="Ingala Earth"
        width={size}
        height="70"
        priority
      />
    </Link>
  );
}
