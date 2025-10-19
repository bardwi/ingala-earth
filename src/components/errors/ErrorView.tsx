'use client';

import Link from 'next/link';
import s from './ErrorView.module.scss';

type Props = {
  title: string;
  message?: string;
  showHomeLink?: boolean;
  onRetry?: () => void;
  supportHref?: string;
};

export default function ErrorView({
  title,
  message,
  showHomeLink = true,
  onRetry,
  supportHref = 'mailto:reachus@ingala.earth?subject=Site%20error',
}: Props) {
  return (
    <div className={s.wrap}>
      <div className={s.card}>
        <h1 className={s.h1}>{title}</h1>
        {message && <p className={s.p}>{message}</p>}

        <div className={s.actions}>
          {onRetry && (
            <button type="button" className={s.primary} onClick={onRetry}>
              Try again
            </button>
          )}

          {showHomeLink && (
            <Link href="/" className={s.ghost}>
              Go Home
            </Link>
          )}

          <a className={s.link} href={supportHref}>
            Report this issue
          </a>
        </div>
      </div>
    </div>
  );
}
