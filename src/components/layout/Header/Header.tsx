import Link from 'next/link';

import s from './Header.module.scss';

import Logo from '@/components/brand/Logo/Logo';

export default function Header() {
  return (
    <header className={s.wrap}>
      <div className="container">
        <div className={s.bar}>
          <Logo />
          <nav className={s.nav}>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className={s.spacer} />
        </div>
      </div>
    </header>
  );
}
