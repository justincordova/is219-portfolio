"use client";

import { useEffect } from "react";

// biome-ignore lint/suspicious/noShadowRestrictedNames: Next.js requires this export name
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-center bg-bg">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">500</p>
      <h1 className="mt-2 font-sans text-3xl font-bold text-fg">Something went wrong</h1>
      <button
        type="button"
        onClick={reset}
        className="mt-8 border border-border px-4 py-2 font-mono text-sm uppercase tracking-wide text-fg transition-colors hover:border-accent hover:text-accent"
      >
        Try again
      </button>
    </main>
  );
}
