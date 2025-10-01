'use client';

import Image from 'next/image';
import Link from 'next/link';
import s from './Logo.module.scss';

type Props = { size?: number };

export default function Logo({ size = 80 }: Props) {
  return (
    <Link href="/" className={s.logo} aria-label="Ingala Home">
      <Image
        src="/logo.png"
        alt="Ingala Earth"
        width={80}
        height={80}
        priority
        style={{ width: size, height: 'auto' }}
      />
    </Link>
  );
}
