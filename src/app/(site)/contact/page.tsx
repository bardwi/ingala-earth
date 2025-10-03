'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/marketing/Hero/Hero';
import s from './Contact.module.scss';
import { RiMailLine, RiPhoneLine, RiMapPin2Line } from 'react-icons/ri';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '');
    const phone = String(fd.get('phone') || '');
    const email = String(fd.get('email') || '');
    const subject = String(fd.get('subject') || 'Website Enquiry');
    const message = String(fd.get('message') || '');

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      '',
      message,
    ].filter(Boolean);

    const mailto = `mailto:reachus@ingala.earth?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    setSubmitting(true);
    window.location.href = mailto;
    setTimeout(() => setSubmitting(false), 800);
  }

  return (
    <>
      <Hero
        image={{
          src: '/hero/greenhouse.jpg',
          alt: 'Greenhouse',
          position: 'center',
          priority: true,
        }}
        title="Contact Us"
        subtitle="We’d love to hear from you!"
        actions={[]}
        minH="56vh"
      />

      <section className={s.wrap} aria-labelledby="contact-title">
        <div className="container">
          {/* info cards */}
          <ul className={s.infoGrid} aria-label="Contact methods">
            <li className={s.card}>
              <div className={s.head}>
                <span className={s.iconBubble}>
                  <RiMailLine />
                </span>
                <h3 className={s.cardTitle}>Mail us</h3>
              </div>
              <div className={s.cardDivider} />
              <a className={s.link} href="mailto:reachus@ingala.earth">
                reachus@ingala.earth
              </a>
            </li>

            <li className={s.card}>
              <div className={s.head}>
                <span className={s.iconBubble}>
                  <RiPhoneLine />
                </span>
                <h3 className={s.cardTitle}>Call us</h3>
              </div>
              <div className={s.cardDivider} />
              <div className={s.muted}>Mobile: +91 8660568930</div>
            </li>

            <li className={s.card}>
              <div className={s.head}>
                <span className={s.iconBubble}>
                  <RiMapPin2Line />
                </span>
                <h3 className={s.cardTitle}>Our Location</h3>
              </div>
              <div className={s.cardDivider} />
              <address className={s.addr}>
                Apt #2603, Anriya Dwelllington, No 1<br />
                L.G Hall, RMV 2nd Stage, Dollars Colony
                <br />
                Bangalore, Karnataka, India – 560094
              </address>
            </li>
          </ul>

          {/* form panel */}
          <div className={s.panel}>
            <div className={s.imageWrap} aria-hidden="true">
              <Image
                src="/images/getintouch.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className={s.img}
                priority={false}
              />
            </div>

            <form className={s.form} onSubmit={onSubmit}>
              <h2 id="contact-title" className={s.formTitle}>
                Have any Questions?
                <br />
                Get in Touch!
              </h2>

              <div className={s.row}>
                <label className="sr-only" htmlFor="name">
                  Your Name
                </label>
                <input id="name" name="name" placeholder="Your Name" required />

                <label className="sr-only" htmlFor="phone">
                  Phone Number
                </label>
                <input id="phone" name="phone" placeholder="Phone Number" />
              </div>

              <div className={s.row}>
                <label className="sr-only" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  required
                />

                <label className="sr-only" htmlFor="subject">
                  Subject
                </label>
                <input id="subject" name="subject" placeholder="Subject" />
              </div>

              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message…"
                rows={6}
              />

              <button className={s.btn} type="submit" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
