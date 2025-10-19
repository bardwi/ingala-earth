'use client';

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import ErrorView from '@/components/errors/ErrorView';

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Header />
      <ErrorView
        title="Something went wrong"
        message={`${error.message}${
          error.digest ? ` (ref: ${error.digest})` : ''
        }`}
        onRetry={() => reset()}
      />
      <Footer />
    </>
  );
}
