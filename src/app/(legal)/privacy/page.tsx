import type { Metadata } from 'next';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import s from './Privacy.module.scss';

export const metadata: Metadata = {
  title: 'Privacy Policy • INGALA EARTH LLP',
  description:
    'How INGALA EARTH LLP collects, uses, protects, and shares personal information. India DPDP 2023 and GDPR compliant.',
  robots: 'index,follow',
  openGraph: {
    title: 'Privacy Policy • INGALA EARTH LLP',
    description:
      'How INGALA EARTH LLP collects, uses, protects, and shares personal information. India DPDP 2023 and GDPR compliant.',
    type: 'article',
  },
};

const LAST_UPDATED = '14 Oct 2025';

export default function PrivacyPage() {
  const org = {
    name: 'INGALA EARTH LLP',
    gst: '29AAJFI8158G1ZW',
    addr1: 'Apt No. 6203, Anriya Dwellington Apartments',
    addr2: 'No 1, L.G Halli, RMV Extension 2nd Stage',
    addr3: 'Dollars Colony, R.M.V. Extension II Stage',
    city: 'Bangalore North, Bangalore',
    stateZip: 'Karnataka, India – 560094',
    emails: ['dippak@ingala.earth', 'reachus@ingala.earth'],
    site: 'https://ingala.earth',
    hoster: { name: 'BigRock', url: 'https://www.bigrock.in' },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    url: `${org.site}/privacy`,
    publisher: { '@type': 'Organization', name: org.name },
    dateModified: new Date(LAST_UPDATED).toISOString(),
    about: 'Privacy policy describing processing of personal data.',
  };

  return (
    <>
      <Header />
      <main className={s.wrap}>
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className={`container ${s.header}`}>
          <h1 className={s.h1}>Privacy Policy</h1>
          <p className={s.meta}>Last updated: {LAST_UPDATED}</p>
          <address className={s.address}>
            <strong>{org.name}</strong> (GST: {org.gst})<br />
            {org.addr1}
            <br />
            {org.addr2}
            <br />
            {org.addr3}
            <br />
            {org.city}
            <br />
            {org.stateZip}
          </address>
        </header>

        <div className={`container ${s.grid}`}>
          {/* TOC */}
          <nav className={s.toc} aria-label="Table of contents">
            <ol>
              <li>
                <a href="#scope">Scope</a>
              </li>
              <li>
                <a href="#roles">Our Role (Controller vs Processor)</a>
              </li>
              <li>
                <a href="#data-we-collect">Data We Collect</a>
              </li>
              <li>
                <a href="#purposes">How We Use Data</a>
              </li>
              <li>
                <a href="#legal-bases">Legal Bases (GDPR)</a>
              </li>
              <li>
                <a href="#sharing">Sharing & Processors</a>
              </li>
              <li>
                <a href="#transfers">International Transfers</a>
              </li>
              <li>
                <a href="#retention">Retention</a>
              </li>
              <li>
                <a href="#security">Security</a>
              </li>
              <li>
                <a href="#cookies">Cookies</a>
              </li>
              <li>
                <a href="#rights-in">Your Rights — India (DPDP 2023)</a>
              </li>
              <li>
                <a href="#rights-gdpr">Your Rights — EEA/UK (GDPR)</a>
              </li>
              <li>
                <a href="#children">Children</a>
              </li>
              <li>
                <a href="#changes">Changes</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ol>
          </nav>

          {/* Body */}
          <article className={s.body}>
            <section id="scope">
              <h2>1) Scope</h2>
              <p>
                This Privacy Policy explains how <strong>{org.name}</strong>{' '}
                (“Ingala”, “we”, “us”) collects and uses personal information
                from visitors to our website and from people who contact us. We
                serve users <strong>worldwide</strong>.
              </p>
              <p>
                This policy does not cover client data we process under a
                separate services agreement; see <a href="#roles">Our Role</a>.
              </p>
            </section>

            <section id="roles">
              <h2>2) Our Role (Controller vs. Processor)</h2>
              <ul>
                <li>
                  <strong>Controller (website & inquiries):</strong> For
                  information you submit on our site (e.g., contact forms,
                  emails), Ingala acts as the <em>data controller</em>.
                </li>
                <li>
                  <strong>Processor (client projects):</strong> When clients
                  provide personal data for project work, we act as a{' '}
                  <em>data processor</em> and process such data only on the
                  client’s instructions.
                </li>
              </ul>
            </section>

            <section id="data-we-collect">
              <h2>3) Data We Collect</h2>
              <h3>Information you provide</h3>
              <ul>
                <li>
                  Contact details (name, email, phone) and the content of your
                  message.
                </li>
                <li>Any information you include when contacting us.</li>
              </ul>

              <h3>Information collected automatically</h3>
              <ul>
                <li>
                  Server/hosting logs (IP address, timestamps, pages viewed,
                  basic device/browser).
                </li>
                <li>
                  Essential cookies required to run the site. We do not use
                  advertising cookies.
                </li>
              </ul>
            </section>

            <section id="purposes">
              <h2>4) How We Use Data</h2>
              <ul>
                <li>
                  <strong>Respond to inquiries</strong> and communicate with
                  you.
                </li>
                <li>
                  <strong>Operate, secure, and troubleshoot</strong> the website
                  (e.g., server logs).
                </li>
              </ul>
              <p>
                We do <strong>not</strong> sell personal information and we do{' '}
                <strong>not</strong> share it for marketing.
              </p>
            </section>

            <section id="legal-bases">
              <h2>5) Legal Bases (GDPR/UK GDPR)</h2>
              <ul>
                <li>
                  <strong>Legitimate interests</strong> (running the site;
                  responding to your requests).
                </li>
                <li>
                  <strong>Consent</strong> where required (e.g., any future
                  optional cookies or newsletters).
                </li>
              </ul>
            </section>

            <section id="sharing">
              <h2>6) Sharing & Processors</h2>
              <p>
                We disclose data only to service providers acting on our behalf
                and under contract, and to authorities if required by law.
              </p>
              <ul>
                <li>
                  <strong>Hosting:</strong>{' '}
                  <a href={org.hoster.url} target="_blank" rel="noreferrer">
                    {org.hoster.name}
                  </a>
                </li>
              </ul>
              <p>
                We do not share your data with third parties for their own
                marketing purposes.
              </p>
            </section>

            <section id="transfers">
              <h2>7) International Transfers</h2>
              <p>
                Our primary operations and hosting are in <strong>India</strong>
                . If you access the site from outside India (including the
                EEA/UK/US), your data may be transferred to and processed in
                India. Where required, we use appropriate safeguards and
                contractual commitments.
              </p>
            </section>

            <section id="retention">
              <h2>8) Data Retention</h2>
              <ul>
                <li>
                  Inquiry emails and related correspondence are kept only as
                  long as needed to respond and manage our relationship, then
                  archived or deleted unless a longer period is required by law
                  or to establish/defend legal claims.
                </li>
                <li>
                  Server logs are retained for a limited period for security and
                  diagnostics.
                </li>
              </ul>
            </section>

            <section id="security">
              <h2>9) Security</h2>
              <p>
                We use reasonable technical and organizational measures to
                protect personal information. No method of transmission or
                storage is completely secure; please take care with the
                information you send us.
              </p>
            </section>

            <section id="cookies">
              <h2>10) Cookies</h2>
              <p>
                We use only essential cookies to operate the site. If we add
                analytics, newsletters, or other optional cookies in the future,
                we will update this policy and present any required
                notices/consent.
              </p>
            </section>

            <section id="rights-in">
              <h2>11) Your Rights — India (DPDP 2023)</h2>
              <p>
                Under the Digital Personal Data Protection Act, 2023, Indian
                users (Data Principals) may have rights to:
              </p>
              <ul>
                <li>
                  <strong>Access</strong> your personal data processed by us.
                </li>
                <li>
                  <strong>Correction/Erasure</strong> of inaccurate or
                  unnecessary personal data.
                </li>
                <li>
                  <strong>Grievance Redressal</strong> with our Grievance
                  Officer and, if unresolved, escalation to the Data Protection
                  Board as per applicable rules.
                </li>
                <li>
                  <strong>Nominate</strong> an individual to exercise your
                  rights in case of death or incapacity (where notified).
                </li>
              </ul>
              <p>
                To exercise your rights, see <a href="#contact">Contact</a>. We
                may request information to verify your identity and will respond
                within timelines required by law.
              </p>
            </section>

            <section id="rights-gdpr">
              <h2>12) Your Rights — EEA/UK (GDPR)</h2>
              <ul>
                <li>
                  <strong>Access</strong> – get a copy of your personal data we
                  hold.
                </li>
                <li>
                  <strong>Rectification</strong> – correct inaccurate or
                  incomplete data.
                </li>
                <li>
                  <strong>Erasure</strong> – request deletion (“right to be
                  forgotten”).
                </li>
                <li>
                  <strong>Restriction</strong> – ask us to limit certain
                  processing.
                </li>
                <li>
                  <strong>Objection</strong> – object to processing based on
                  legitimate interests.
                </li>
                <li>
                  <strong>Portability</strong> – receive your data in a portable
                  format.
                </li>
                <li>
                  <strong>Withdraw consent</strong> – where processing is based
                  on consent.
                </li>
                <li>
                  <strong>Complain</strong> – with your local data protection
                  authority (DPA) if you believe your rights have been
                  infringed.
                </li>
              </ul>
              <p>
                To exercise these rights, see <a href="#contact">Contact</a>. We
                will respond within the timelines required by GDPR/UK GDPR.
              </p>
            </section>

            <section id="children">
              <h2>13) Children</h2>
              <p>
                Our website and services are not intended for children under 16
                (or the age defined by applicable law). We do not knowingly
                collect personal information from children.
              </p>
            </section>

            <section id="changes">
              <h2>14) Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. The “Last updated”
                date shows the most recent revision. Material changes will be
                posted on this page.
              </p>
            </section>

            <section id="contact">
              <h2>15) Contact</h2>
              <p>
                For privacy requests or questions (including DPDP grievances &
                GDPR requests):
              </p>
              <ul className={s.contactList}>
                {org.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`}>{e}</a>
                  </li>
                ))}
              </ul>
              <p className={s.small}>
                <strong>Grievance Officer (India):</strong> Privacy Team,{' '}
                {org.name} (
                <a href={`mailto:${org.emails[1]}`}>{org.emails[1]}</a>)
              </p>
            </section>

            <hr className={s.hr} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
