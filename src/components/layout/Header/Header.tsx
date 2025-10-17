'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import s from './Header.module.scss';
import Icon from '@/components/ui/Icon/Icon';
import Logo from '@/components/brand/Logo/Logo';

import { services } from '@/data/services';
import { projects } from '@/data/projects';
import MegaMenu, {
  type MegaItem,
} from '@/components/navigation/MegaMenu/MegaMenu';
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

  const serviceCards: MegaItem[] = services.map((s) => ({
    slug: s.slug,
    title: s.title,
    blurb: s.blurb,
    cardImg: s.cardImg,
    iconId:
      s.slug === 'agroecology'
        ? 'leaf'
        : s.slug === 'landscape-restoration'
        ? 'map'
        : s.slug === 'bio-labs'
        ? 'lab'
        : s.slug === 'farmer-groups'
        ? 'group'
        : 'book',
  }));

  const projectCards: MegaItem[] = useMemo(
    () =>
      projects.map((p) => ({
        slug: p.slug,
        title: p.title,
        blurb: p.summary,
        cardImg: { src: p.cover.src, alt: p.cover.alt ?? p.title },
        iconId: /research/i.test(p.slug)
          ? 'lab'
          : /education|capacity/i.test(p.slug)
          ? 'book'
          : /landscape|rehabilitation/i.test(p.slug)
          ? 'map'
          : /regenerative|permaculture/i.test(p.slug)
          ? 'leaf'
          : 'group',
      })),
    []
  );

  type NavItem = { href: string; title: string };
  const serviceItems: NavItem[] = services.map((svc) => ({
    href: `/services/${svc.slug}`,
    title: svc.title,
  }));
  const projectItems: NavItem[] = projects.map((p) => ({
    href: `/projects/${p.slug}`,
    title: p.title,
  }));

  return (
    <header className={`${s.wrap} ${solid ? s.solid : s.clear}`}>
      <div className={`container ${s.bar}`}>
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

        <nav className={s.nav} aria-label="Main">
          <Link
            className={`${s.link} ${isActive('/', pathname) ? s.active : ''}`}
            href="/"
          >
            Home
          </Link>

          <MegaMenu
            label="Services"
            labelHref="/services"
            baseHref="/services"
            items={serviceCards}
            variant="serviceList"
            sideImage={{
              src: '/projects/hero-projects.png',
              alt: 'Green landscape',
            }}
            cta={{ label: 'Explore All services', href: '/services' }}
          />

          <MegaMenu
            label="Projects"
            labelHref="/projects"
            baseHref="/projects"
            items={projectCards}
            variant="projectsList"
            sideImage={{
              src: '/projects/agroecology-research.jpg',
              alt: 'Greenhouse',
            }}
            cta={{ label: 'Explore All Projects', href: '/projects' }}
          />

          <Link
            className={`${s.link} ${
              isActive('/about', pathname) ? s.active : ''
            }`}
            href="/about"
          >
            About Us
          </Link>
        </nav>

        <div className={s.right}>
          <Link href="/contact" className={s.cta}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* mobile drawer unchanged */}
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
