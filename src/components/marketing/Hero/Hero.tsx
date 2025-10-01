'use client';

import Image from 'next/image';
import Link from 'next/link';
import s from './Hero.module.scss';
import Icon from '@/components/ui/Icon/Icon';

type CTA = {
  href: string;
  label: string;
  variant?: 'primary' | 'ghost';
};

type Props = {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  image: {
    src: string;
    alt?: string;
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
    priority?: boolean;
  };
  actions?: CTA[];
  scrollToId?: string;
  minH?: string;
};

export default function Hero({
  title,
  subtitle,
  image,
  actions = [],
  scrollToId,
  minH = '84vh',
}: Props) {
  const objectPosition =
    image.position === 'top'
      ? '50% 0%'
      : image.position === 'bottom'
      ? '50% 100%'
      : image.position === 'left'
      ? '0% 50%'
      : image.position === 'right'
      ? '100% 50%'
      : '50% 50%';

  return (
    <section className={s.wrap} style={{ minHeight: minH }}>
      <div className={s.bg}>
        <Image
          src={image.src}
          alt={image.alt ?? ''}
          fill
          priority={!!image.priority}
          sizes="100vw"
          className={s.img}
          style={{ objectPosition }}
        />
        {/* soft color veil */}
        <div className={s.veil} />
      </div>

      <div className={`container ${s.content}`}>
        <h1 className={s.title}>{title}</h1>
        {subtitle ? <p className={s.subtitle}>{subtitle}</p> : null}

        {actions.length > 0 && (
          <div className={s.actions}>
            {actions.map((a) => (
              <Link
                key={a.href + a.label}
                href={a.href}
                className={a.variant === 'ghost' ? s.ghost : s.primary}
              >
                {a.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {scrollToId && (
        <a className={s.down} href={`#${scrollToId}`} aria-label="Scroll down">
          <Icon name="chevron-down" size={22} />
        </a>
      )}
    </section>
  );
}
