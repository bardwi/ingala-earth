import Link from 'next/link';
import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.foot}>
      <div className="container">
        <div className={s.grid}>
          <div>
            <strong>Ingala Earth</strong>
            <p>Regenerative design & restoration.</p>
          </div>
          <div>
            <Link href="/services">Services</Link>
            <br />
            <Link href="/projects">Projects</Link>
          </div>
          <div>
            <Link href="/privacy">Privacy</Link>
            <br />
            <Link href="/imprint">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
