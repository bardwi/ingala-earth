import Link from 'next/link';
import s from './Footer.module.scss';
import Logo from '@/components/brand/Logo/Logo';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.wrap} role="contentinfo">
      <div className={`container ${s.inner}`}>
        {/* Brand */}
        <div className={s.brand}>
          <Logo size={80} />
        </div>

        {/* Quick links */}
        <nav className={s.col} aria-label="Footer">
          <h4 className={s.h}>Quick links</h4>
          <ul className={s.list}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div className={s.col}>
          <h4 className={s.h}>Contact Us</h4>
          <ul className={s.list}>
            <li>
              <span className={s.k}>Phone:</span>{' '}
              <a href="tel:1234567890">123-456-7890</a>
            </li>
            <li>
              <span className={s.k}>Email:</span>{' '}
              <a href="mailto:reachus@ingala.earth">reachus@ingala.earth</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className={s.col}>
          <h4 className={s.h}>Social</h4>
          <div className={s.social}>
            <a aria-label="Facebook" href="#" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a aria-label="Instagram" href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a aria-label="LinkedIn" href="#" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className={s.bottom}>© {year} Ingala · All Rights Reserved</div>
    </footer>
  );
}
