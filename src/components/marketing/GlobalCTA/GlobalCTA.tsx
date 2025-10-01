import s from './GlobalCTA.module.scss';
import Link from 'next/link';
export default function GlobalCTA() {
  return (
    <section className={s.wrap} aria-labelledby="cta-title">
      <div className="container">
        <div className={s.inner}>
          <h2 id="cta-title" className={s.title}>
            Ready to begin your regenerative journey?
          </h2>

          <div className={s.subRow}>
            <p className={s.tagline}>
              Let’s co-design solutions for your land.
            </p>
            <Link href="/contact" className={s.cta}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
