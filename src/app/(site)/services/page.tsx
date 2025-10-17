import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/marketing/Hero/Hero';
import s from './Services.module.scss';
import { services } from '@/data/services';

import {
  LuClipboardList,
  LuPuzzle,
  LuShovel,
  LuActivity,
  LuGraduationCap,
} from 'react-icons/lu';

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
              landscapes that restore soil, harvest water, and enhance
              biodiversity. Through a blend of ecological design, traditional
              knowledge, and climate resilience strategies, we deliver
              end-to-end solutions—from site assessment and planning to capacity
              building and community-led implementation.
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
                  <div className={s.rule} aria-hidden />
                  <div className={s.eyebrow}>{svc.eyebrow}</div>

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
      <section className={s.processWrap} aria-labelledby="process-title">
        <div className="container">
          <h2 id="process-title" className={s.h2}>
            How We Work
          </h2>

          <ul className={s.steps} role="list">
            <li className={s.step}>
              <span className={s.dot} aria-hidden>
                <LuClipboardList />
              </span>
              <span className={s.stepTitle}>
                Site & Stakeholder
                <br />
                Assessment
              </span>
            </li>

            <li className={s.step}>
              <span className={s.dot} aria-hidden>
                <LuPuzzle />
              </span>
              <span className={s.stepTitle}>Solution Design</span>
            </li>

            <li className={s.step}>
              <span className={s.dot} aria-hidden>
                <LuShovel />
              </span>
              <span className={s.stepTitle}>
                Implementation &
                <br />
                Support
              </span>
            </li>

            <li className={s.step}>
              <span className={s.dot} aria-hidden>
                <LuActivity />
              </span>
              <span className={s.stepTitle}>
                Monitoring &
                <br />
                Evaluation
              </span>
            </li>

            <li className={s.step}>
              <span className={s.dot} aria-hidden>
                <LuGraduationCap />
              </span>
              <span className={s.stepTitle}>Capacity Building</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
