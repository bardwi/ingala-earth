import Link from 'next/link';
import s from './GlobalCTA.module.scss';

type CTA = { href: string; label: string };

type Props = {
  title?: string;
  kicker?: string;
  cta?: CTA;
};

export default function GlobalCTA({
  title = 'Ready to begin your regenerative journey?',
  kicker = 'Let’s co-design solutions for your land.',
  cta = { href: 'https://bit.ly/ingalaform', label: 'Get Started' },
}: Props) {
  const isExternal = /^https?:\/\//i.test(cta.href);
  return (
    <section className={s.wrap} aria-labelledby="cta-title">
      <div className="container">
        <div className={s.inner}>
          <h2 id="cta-title" className={s.title}>
            {title}
          </h2>

          <div className={s.subRow}>
            {kicker && <p className={s.tagline}>{kicker}</p>}

            {isExternal ? (
              <a
                href={cta.href}
                className={s.cta}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.label}
              </a>
            ) : (
              <Link href={cta.href} className={s.cta}>
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
