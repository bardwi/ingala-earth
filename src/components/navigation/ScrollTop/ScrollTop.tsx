'use client';

import { useEffect, useState } from 'react';
import s from './ScrollTop.module.scss';
import { LuArrowUp } from 'react-icons/lu';

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320); // show after ~1 screen
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      type="button"
      className={`${s.btn} ${show ? s.show : ''}`}
      onClick={toTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <LuArrowUp aria-hidden />
    </button>
  );
}
