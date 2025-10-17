'use client';

import ErrorView from '@/components/errors/ErrorView';
import './globals.scss';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorView
          title="Critical error"
          message={`${error.message}${
            error.digest ? ` (ref: ${error.digest})` : ''
          }`}
          showHomeLink={false}
          onRetry={() => reset()}
        />
      </body>
    </html>
  );
}
