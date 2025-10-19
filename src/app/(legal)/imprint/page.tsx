import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import s from './Imprint.module.scss';

export const metadata: Metadata = {
  title: 'Imprint — INGALA EARTH LLP',
  description:
    'Legal disclosure and provider identification for INGALA EARTH LLP.',
  robots: 'index,follow',
};

const org = {
  name: 'INGALA EARTH LLP',
  legalForm: 'Limited Liability Partnership (LLP)',
  gst: '29AAJFI8158G1ZW',
  addr1: 'Apt #2603, Anriya Dwelllington, No 1',
  addr2: 'L.G Hall, RMV 2nd Stage, Dollars Colony',
  city: 'Bangalore',
  stateZip: 'Karnataka, India – 560094',
  emails: ['dippak@ingala.earth', 'reachus@ingala.earth'],
  site: 'https://ingala.earth',
  hoster: { name: 'BigRock', url: 'https://www.bigrock.in' },
  partners: ['Phulmani Baro', 'Vishak Chandramaouli', 'Dippak Basavaraj'],
};

export default function ImprintPage() {
  return (
    <>
      <Header />
      <main className={s.page}>
        {/* Top band */}
        <div className={s.band}>
          <div className={`container ${s.bandInner}`}>
            <h1 className={s.h1}>Imprint</h1>
            <p className={s.updated}>
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className={`container ${s.narrow}`}>
          <section className={s.card}>
            <h2 className={s.h2}>Provider</h2>
            <address className={s.addr}>
              <strong className={s.org}>{org.name}</strong>
              <br />
              {org.addr1}
              <br />
              {org.addr2}
              <br />
              {org.city}, {org.stateZip}
            </address>

            <dl className={s.kv}>
              <dt>Legal Form</dt>
              <dd>{org.legalForm}</dd>

              <dt>GSTIN</dt>
              <dd>{org.gst}</dd>

              <dt>Website</dt>
              <dd>
                <a href={org.site} target="_blank" rel="noopener noreferrer">
                  {org.site}
                </a>
              </dd>

              <dt>Email</dt>
              <dd className={s.inlineList}>
                {org.emails.map((e, i) => (
                  <span key={e}>
                    <a href={`mailto:${e}`}>{e}</a>
                    {i < org.emails.length - 1 ? (
                      <span className={s.dot}>•</span>
                    ) : null}
                  </span>
                ))}
              </dd>
            </dl>
          </section>

          {/* Partners */}
          <section className={s.card}>
            <h2 className={s.h2}>Partners (Designated Partners)</h2>
            <ul className={s.dotList}>
              {org.partners.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>

          {/* Content & Hosting */}
          <section className={s.card}>
            <h2 className={s.h2}>Responsible for Content</h2>
            <p className={s.body}>
              The content on this website is provided by{' '}
              <strong>INGALA EARTH LLP</strong>. If you spot inaccuracies or
              have concerns, please contact us at{' '}
              <a href="mailto:dippak@ingala.earth">dippak@ingala.earth</a>.
            </p>

            <div className={s.divider} aria-hidden />

            <h2 className={s.h2}>Hosting Provider</h2>
            <p className={s.body}>
              Hosted by{' '}
              <a
                href="https://www.bigrock.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                BigRock
              </a>
              .
            </p>
          </section>

          {/* Legal notes */}
          <section className={s.card}>
            <h2 className={s.h2}>Copyright & Trademarks</h2>
            <p className={s.body}>
              Unless otherwise stated, all text, images, and designs on this
              site are © {new Date().getFullYear()} {org.name}. Third-party
              names or logos are property of their respective owners and used
              for identification only.
            </p>
          </section>

          <section className={s.card}>
            <h2 className={s.h2}>Liability Notice</h2>
            <p className={s.body}>
              We aim to provide accurate, current information but do not assume
              liability for errors, omissions, or the content of external sites
              linked from this website. Operators of linked pages are solely
              responsible for their content.
            </p>
          </section>

          <section className={s.note}>
            For personal data, cookies, and your rights (including GDPR and
            India DPDP), see our <Link href="/privacy">Privacy Policy</Link>.
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
