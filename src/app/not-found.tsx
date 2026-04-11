import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-center bg-bg">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">404</p>
      <h1 className="mt-2 font-sans text-3xl font-bold text-fg">Page not found</h1>
      <Link
        href="/"
        className="mt-8 border border-accent px-4 py-2 font-mono text-sm uppercase tracking-wide text-accent no-underline transition-colors hover:bg-accent hover:text-bg"
      >
        ← Back home
      </Link>
    </main>
  );
}
