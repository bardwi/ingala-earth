'use client';
import { useEffect } from 'react';

export default function StripInjectedAttrs() {
  useEffect(() => {
    const b = document.body;
    b.removeAttribute('data-new-gr-c-s-check-loaded');
    b.removeAttribute('data-gr-ext-installed');
  }, []);
  return null;
}
