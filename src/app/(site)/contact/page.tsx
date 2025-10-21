'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/marketing/Hero/Hero';
import s from './Contact.module.scss';
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPin2Line,
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiCloseLine,
} from 'react-icons/ri';

type Toast = {
  type: 'success' | 'error';
  title: string;
  msg: string;
  canRetry?: boolean;
} | null;

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
  const [lastPayload, setLastPayload] = useState<Record<string, string> | null>(
    null
  );

  // auto-hide toast
  useEffect(() => {
    if (!toast || toast.type !== 'success') return;
    const id = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(id);
  }, [toast]);

  async function send(payload: Record<string, string>) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data: { ok?: boolean; error?: string } = await res
      .json()
      .catch(() => ({}));
    return { ok: Boolean(res.ok && data.ok), error: data.error };
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get('name') || ''),
      phone: String(fd.get('phone') || ''),
      email: String(fd.get('email') || ''),
      subject: String(fd.get('subject') || 'Website Enquiry'),
      message: String(fd.get('message') || ''),
      website: String(fd.get('website') || ''), // honeypot
    };

    setSubmitting(true);
    setToast(null);
    setLastPayload(payload);

    try {
      const { ok, error } = await send(payload);
      if (ok) {
        form.reset();
        setToast({
          type: 'success',
          title: 'Message sent',
          msg: 'Thanks! Your message has been sent. We’ll get back to you soon.',
        });
      } else {
        setToast({
          type: 'error',
          title: 'Message not sent',
          msg:
            error ||
            'Something went wrong while sending your message. You can try again or email us directly.',
          canRetry: true,
        });
      }
    } catch {
      setToast({
        type: 'error',
        title: 'Network error',
        msg: 'We could not reach the server. Please check your connection, try again, or email us directly.',
        canRetry: true,
      });
    } finally {
      setSubmitting(false);
    }
  }

  async function retrySend() {
    if (!lastPayload || submitting) return;
    setSubmitting(true);
    try {
      const { ok, error } = await send(lastPayload);
      if (ok) {
        setToast({
          type: 'success',
          title: 'Message sent',
          msg: 'Thanks! Your message has been sent.',
        });
      } else {
        setToast({
          type: 'error',
          title: 'Still not sent',
          msg: error || 'Please try again in a moment or email us directly.',
          canRetry: true,
        });
      }
    } finally {
      setSubmitting(false);
    }
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
                Apt No. 6203, Anriya Dwellington, No 1<br />
                L.G Halli, RMV Extension 2nd Stage, Dollars Colony, Extension II
                Stage
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
              />
            </div>

            <form className={s.form} onSubmit={onSubmit}>
              <h2 id="contact-title" className={s.formTitle}>
                Have any Questions?
                <br />
                Get in Touch!
              </h2>

              {/* honeypot (hidden) */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className={s.hp}
              />

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

      {/* Snackbar */}
      {toast && (
        <div
          className={`${s.toast} ${
            toast.type === 'success' ? s.toastSuccess : s.toastError
          }`}
          role={toast.type === 'error' ? 'alert' : 'status'}
          aria-live={toast.type === 'error' ? 'assertive' : 'polite'}
        >
          <div className={s.toastInner}>
            <div className={s.toastIcon} aria-hidden>
              {toast.type === 'success' ? (
                <RiCheckboxCircleLine size={22} />
              ) : (
                <RiErrorWarningLine size={22} />
              )}
            </div>

            <div className={s.toastContent}>
              <div className={s.toastTitle}>{toast.title}</div>
              <div className={s.toastMsg}>{toast.msg}</div>

              {toast.type === 'error' && (
                <div className={s.toastActions}>
                  {toast.canRetry && (
                    <button
                      type="button"
                      className={s.toastBtn}
                      onClick={retrySend}
                      disabled={submitting}
                    >
                      {submitting ? 'Retrying…' : 'Retry'}
                    </button>
                  )}
                  <a
                    href="mailto:reachus@ingala.earth?subject=Website%20Enquiry"
                    className={s.toastBtnOutline}
                  >
                    Email us
                  </a>
                </div>
              )}
            </div>

            <button
              type="button"
              className={s.toastClose}
              aria-label="Close"
              onClick={() => setToast(null)}
            >
              <RiCloseLine size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
