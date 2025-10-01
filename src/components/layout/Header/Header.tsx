'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import s from './Header.module.scss';
import Icon from '@/components/ui/Icon/Icon';
import Logo from '@/components/brand/Logo/Logo';

import { services } from '@/data/services';
import { projects } from '@/data/projects';

export default function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  type NavItem = { href: string; title: string };

  const serviceItems: NavItem[] = useMemo(
    () =>
      services.map((s) => ({ href: `/services/${s.slug}`, title: s.title })),
    []
  );

  const projectItems: NavItem[] = useMemo(
    () =>
      projects.map((p) => ({ href: `/projects/${p.slug}`, title: p.title })),
    []
  );

  return (
    <header className={`${s.wrap} ${solid ? s.solid : s.clear}`}>
      <div className={`container ${s.bar}`}>
        {/* left: logo + burger (mobile) */}
        <div className={s.left}>
          <button
            className={s.menuBtn}
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Icon name="menu" size={22} />
          </button>
          <Logo size={80} />
        </div>

        {/* center: nav */}
        <nav className={s.nav} aria-label="Main">
          <Link
            className={`${s.link} ${isActive('/', pathname) ? s.active : ''}`}
            href="/"
          >
            Home
          </Link>

          <div className={s.drop}>
            <button className={s.dropBtn}>
              Services <Icon name="chevron-down" />
            </button>
            <div className={s.panel}>
              {serviceItems.map((it) => (
                <Link key={it.href} href={it.href} className={s.item}>
                  {it.title}
                </Link>
              ))}
              <div className={s.sep} />
              <Link href="/services" className={s.viewAll}>
                View all services →
              </Link>
            </div>
          </div>

          <div className={s.drop}>
            <button className={s.dropBtn}>
              Projects <Icon name="chevron-down" />
            </button>
            <div className={s.panel}>
              {projectItems.map((it) => (
                <Link key={it.href} href={it.href} className={s.item}>
                  {it.title}
                </Link>
              ))}
              <div className={s.sep} />
              <Link href="/projects" className={s.viewAll}>
                View all projects →
              </Link>
            </div>
          </div>

          <Link
            className={`${s.link} ${
              isActive('/about', pathname) ? s.active : ''
            }`}
            href="/about"
          >
            About Us
          </Link>
        </nav>

        {/* right: CTA */}
        <div className={s.right}>
          <Link href="/contact" className={s.cta}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`${s.drawer} ${mobileOpen ? s.open : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className={s.drawerBar}>
          <Logo size={80} />
          <button
            className={s.closeBtn}
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <Icon name="close" size={22} />
          </button>
        </div>
        <div className={s.drawerBody}>
          <Link href="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <details open>
            <summary>Services</summary>
            <div className={s.col}>
              {serviceItems.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {it.title}
                </Link>
              ))}
            </div>
          </details>
          <details>
            <summary>Projects</summary>
            <div className={s.col}>
              {projectItems.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {it.title}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/about" onClick={() => setMobileOpen(false)}>
            About Us
          </Link>
          <Link
            href="/contact"
            className={s.ctaMobile}
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
      {mobileOpen && (
        <div className={s.scrim} onClick={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

function isActive(href: string, pathname: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}
