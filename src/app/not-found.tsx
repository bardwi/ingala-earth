import Link from 'next/link';
import s from './not-found.module.scss';

export default function NotFound() {
  return (
    <main className={s.wrap}>
      <div className={s.card}>
        <h1 className={s.h1}>Page not found</h1>
        <p className={s.p}>The page you’re looking for doesn’t exist.</p>
        <p>
          <Link href="/" className={s.ghost}>
            Back to Home
          </Link>
        </p>
      </div>
    </main>
  );
}
