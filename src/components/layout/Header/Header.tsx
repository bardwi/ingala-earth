'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState, useCallback } from 'react';
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

  // mobile accordion state
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  // solid header on scroll
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  // close drawer when route changes (e.g., when tapping a link)
  useEffect(() => {
    // close and reset panels on navigation
    setMobileOpen(false);
    setServicesOpen(false);
    setProjectsOpen(false);
  }, [pathname]);

  const closeDrawer = useCallback(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setProjectsOpen(false);
  }, []);

  const toggleServices = useCallback(() => {
    setServicesOpen((prev) => {
      const next = !prev;
      if (next) setProjectsOpen(false);
      return next;
    });
  }, []);

  const toggleProjects = useCallback(() => {
    setProjectsOpen((prev) => {
      const next = !prev;
      if (next) setServicesOpen(false);
      return next;
    });
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

        {/* Desktop nav */}
        <nav className={s.nav} aria-label="Main">
          <Link
            className={`${s.link} ${isActive('/', pathname) ? s.active : ''}`}
            href="/"
            scroll={false}
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
            active={isActive('/services', pathname)}
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
            active={isActive('/projects', pathname)}
          />

          <Link
            className={`${s.link} ${
              isActive('/about', pathname) ? s.active : ''
            }`}
            scroll={false}
            href="/about"
          >
            About Us
          </Link>
        </nav>

        <div className={s.right}>
          <Link href="/contact" className={s.cta} scroll={false}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`${s.drawer} ${mobileOpen ? s.open : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className={s.drawerBar}>
          <Logo size={80} />
          <button
            className={s.closeBtn}
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <Icon name="close" size={22} />
          </button>
        </div>

        <div className={s.drawerBody}>
          <Link href="/" onClick={closeDrawer}>
            Home
          </Link>

          {/* Services group */}
          <div className={s.group}>
            <div className={s.groupHeader}>
              <Link
                href="/services"
                className={s.groupLink}
                onClick={closeDrawer}
              >
                Services
              </Link>
              <button
                type="button"
                className={s.expandBtn}
                aria-expanded={servicesOpen}
                aria-controls="mobile-services-panel"
                onClick={toggleServices}
              >
                <span className={s.chev} aria-hidden>
                  <Icon name="chevron-down" size={18} />
                </span>
              </button>
            </div>

            {/* animated height panel (mobile only) */}
            <div
              id="mobile-services-panel"
              className={`${s.panelAnim} ${servicesOpen ? s.openAnim : ''}`}
              hidden={!servicesOpen}
            >
              <div className={s.panelInner}>
                <div className={s.col}>
                  {serviceItems.map((it) => (
                    <Link key={it.href} href={it.href} onClick={closeDrawer}>
                      {it.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects group */}
          <div className={s.group}>
            <div className={s.groupHeader}>
              <Link
                href="/projects"
                className={s.groupLink}
                onClick={closeDrawer}
              >
                Projects
              </Link>
              <button
                type="button"
                className={s.expandBtn}
                aria-expanded={projectsOpen}
                aria-controls="mobile-projects-panel"
                onClick={toggleProjects}
              >
                <span className={s.chev} aria-hidden>
                  <Icon name="chevron-down" size={18} />
                </span>
              </button>
            </div>

            <div
              id="mobile-projects-panel"
              className={`${s.panelAnim} ${projectsOpen ? s.openAnim : ''}`}
              hidden={!projectsOpen}
            >
              <div className={s.panelInner}>
                <div className={s.col}>
                  {projectItems.map((it) => (
                    <Link key={it.href} href={it.href} onClick={closeDrawer}>
                      {it.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/about" onClick={closeDrawer}>
            About Us
          </Link>

          <Link href="/contact" className={s.ctaMobile} onClick={closeDrawer}>
            Contact Us
          </Link>
        </div>
      </div>

      {mobileOpen && <div className={s.scrim} onClick={closeDrawer} />}
    </header>
  );
}

function isActive(href: string, pathname: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}
