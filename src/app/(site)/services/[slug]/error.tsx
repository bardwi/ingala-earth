'use client';

import ErrorView from '@/components/errors/ErrorView';

export default function ServiceError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <ErrorView
      title="We couldn’t load this service"
      message={error.message}
      onRetry={() => reset()}
    />
  );
}
