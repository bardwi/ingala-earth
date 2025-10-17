'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './MegaMenu.module.scss';

import {
  LuLeaf,
  LuMap,
  LuFlaskConical,
  LuUsers,
  LuBookOpen,
} from 'react-icons/lu';

export type MegaItem = {
  slug: string;
  title: string;
  blurb: string;
  cardImg: { src: string; alt: string };
  iconId?: 'leaf' | 'map' | 'lab' | 'group' | 'book';
};

type MegaMenuProps = {
  label: string;
  labelHref: string;
  baseHref: string;
  items: MegaItem[];
  cta?: { label: string; href: string };
  variant?: 'cards' | 'serviceList' | 'projectsList';
  className?: string;
  sideImage?: { src: string; alt: string };
  active?: boolean;
};

export default function MegaMenu({
  label,
  labelHref,
  baseHref,
  items,
  cta,
  variant = 'cards',
  className,
  sideImage,
  active = false,
}: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const id = useId();

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeMenuSoon = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  return (
    <div
      className={`${s.root} ${className ?? ''}`}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenuSoon}
      onFocus={openMenu}
      onBlur={closeMenuSoon}
    >
      <Link
        href={labelHref}
        className={`${s.trigger} ${active ? s.active : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={id}
        aria-current={active ? 'page' : undefined}
      >
        {label}
        <svg className={s.chev} viewBox="0 0 24 24" aria-hidden>
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </Link>

      <div
        id={id}
        role="menu"
        aria-hidden={!open}
        className={`${s.panel} ${open ? s.open : ''}`}
      >
        <div className={s.inner}>
          {variant === 'serviceList' && (
            <div className={s.serviceWrap}>
              <ul className={s.svcList} role="list">
                {items.map((it) => (
                  <li key={it.slug} className={s.svcItem}>
                    <Link
                      href={`${baseHref}/${it.slug}`}
                      className={s.svcRow}
                      role="menuitem"
                    >
                      <span className={s.svcIcon} aria-hidden>
                        <ListIcon id={it.iconId ?? 'leaf'} />
                      </span>
                      <span className={s.svcMeta}>
                        <span className={s.svcTitle}>{it.title}</span>
                        <span className={s.svcBlurb}>{it.blurb}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <aside className={s.aside}>
                {sideImage && (
                  <div className={s.sideCircle}>
                    <Image
                      src={sideImage.src}
                      alt={sideImage.alt}
                      fill
                      className={s.img}
                      sizes="(min-width: 1200px) 320px, 40vw"
                    />
                  </div>
                )}
                {cta && (
                  <Link href={cta.href} className={s.ctaPill}>
                    {cta.label}
                  </Link>
                )}
              </aside>
            </div>
          )}

          {variant === 'projectsList' && (
            <div className={s.projectsWrap}>
              <ul className={s.projList} role="list">
                {items.map((it) => (
                  <li key={it.slug} className={s.projItem}>
                    <Link
                      href={`${baseHref}/${it.slug}`}
                      className={s.projRow}
                      role="menuitem"
                    >
                      <div className={s.projThumb}>
                        <Image
                          src={it.cardImg.src}
                          alt={it.cardImg.alt}
                          fill
                          className={s.img}
                          sizes="(min-width: 1200px) 260px, (min-width: 880px) 40vw, 80vw"
                        />
                      </div>
                      <div className={s.projMeta}>
                        <span className={s.projIcon} aria-hidden>
                          <ListIcon id={it.iconId ?? 'leaf'} />
                        </span>
                        <div className={s.projText}>
                          <div className={s.projTitle}>{it.title}</div>
                          <p className={s.projBlurb}>{it.blurb}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <aside className={s.aside}>
                {sideImage && (
                  <div className={s.sideCircle}>
                    <Image
                      src={sideImage.src}
                      alt={sideImage.alt}
                      fill
                      className={s.img}
                      sizes="(min-width: 1200px) 320px, 40vw"
                    />
                  </div>
                )}
                {cta && (
                  <Link href={cta.href} className={s.ctaPill}>
                    {cta.label}
                  </Link>
                )}
              </aside>
            </div>
          )}

          {variant === 'cards' && (
            <div className={s.grid}>
              {items.map((it) => (
                <Link
                  key={it.slug}
                  href={`${baseHref}/${it.slug}`}
                  className={s.card}
                  role="menuitem"
                  tabIndex={open ? 0 : -1}
                >
                  <div className={s.thumb}>
                    <Image
                      src={it.cardImg.src}
                      alt={it.cardImg.alt}
                      fill
                      sizes="(min-width: 1200px) 260px, (min-width: 880px) 25vw, 46vw"
                      className={s.img}
                    />
                  </div>
                  <div className={s.meta}>
                    <div className={s.title}>{it.title}</div>
                    <p className={s.blurb}>{it.blurb}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ListIcon({ id }: { id: NonNullable<MegaItem['iconId']> }) {
  const common = { 'aria-hidden': true };
  switch (id) {
    case 'map':
      return <LuMap {...common} />;
    case 'lab':
      return <LuFlaskConical {...common} />;
    case 'group':
      return <LuUsers {...common} />;
    case 'book':
      return <LuBookOpen {...common} />;
    case 'leaf':
    default:
      return <LuLeaf {...common} />;
  }
}
