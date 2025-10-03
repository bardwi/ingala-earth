import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/marketing/Hero/Hero';
import s from './Services.module.scss';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <Hero
        image={{
          src: '/hero/greenhouse.jpg',
          alt: 'Greenhouse',
          position: 'center',
        }}
        title="Our Services"
        subtitle="Designing resilient ecosystems rooted in permaculture, traditional wisdom, and whole-systems thinking"
        actions={[]}
        minH="56vh"
      />

      <section className={s.offerWrap} aria-labelledby="offer-title">
        <div className="container">
          <header className={s.offerHead}>
            <h2 id="offer-title" className={s.h2}>
              What We Offer
            </h2>
            <p className={s.intro}>
              We help our clients design and implement regenerative farms and
              landscapes…
            </p>
          </header>

          <ul className={s.cardGrid}>
            {services.map((svc) => (
              <li key={svc.slug} className={s.card}>
                <div className={s.media}>
                  <Image
                    src={svc.cardImg.src}
                    alt={svc.cardImg.alt}
                    fill
                    className={s.img}
                    sizes="(min-width: 980px) 360px, 100vw"
                    priority={false}
                  />
                </div>

                <div className={s.cardBody}>
                  <h3 className={s.cardTitle}>
                    <a className={s.cardLink} href={`/services/${svc.slug}`}>
                      {svc.title}
                    </a>
                  </h3>

                  <p className={s.cardText}>{svc.blurb}</p>

                  <Link
                    className={s.learn}
                    href={`/services/${svc.slug}`}
                    aria-label={`Learn more about ${svc.title}`}
                  >
                    Learn More{' '}
                    <span aria-hidden className={s.chev}>
                      ›
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
