'use client';

import s from './Expertise.module.scss';
import Link from 'next/link';

type Item = {
  icon: React.ReactNode;
  title: string;
  blurb: string;
};

type Props = {
  items: Item[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function Expertise({
  items,
  ctaHref = '/services',
  ctaLabel = 'Learn More',
}: Props) {
  return (
    <section className={s.wrap} aria-labelledby="expertise-title">
      <div className="container">
        <h2 id="expertise-title" className={s.title}>
          Our Expertise
        </h2>

        <ul className={s.grid}>
          {items.map((it, i) => (
            <li key={i} className={s.card}>
              <div className={s.header}>
                <div className={s.icon}>{it.icon}</div>
                <h3 className={s.cardTitle}>{it.title}</h3>
              </div>
              <div className={s.divider} />
              <p className={s.cardBlurb}>{it.blurb}</p>
            </li>
          ))}
        </ul>

        <div className={s.ctaRow}>
          <Link href={ctaHref} className={s.cta}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
