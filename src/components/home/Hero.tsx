import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
          {profile.role}
        </p>
        <h1 className="font-sans text-5xl font-bold leading-[1.05] md:text-7xl">
          {profile.heroTitle.main}
          <br />
          <span className="text-muted">{profile.heroTitle.sub}</span>
        </h1>
        <p className="mt-8 max-w-2xl font-sans text-lg text-fg md:text-xl">
          {profile.promise}
        </p>
        <p className="mt-2 max-w-2xl font-sans text-base text-muted">
          {profile.subPromise}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`mailto:${profile.email}`} variant="primary">
            Email me →
          </Button>
          <Button href={profile.resumeUrl} variant="secondary" download>
            Resume
          </Button>
        </div>
      </div>
      <div className="border-t border-border">
        <Link
          href="/projects/findu"
          className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 font-mono text-sm uppercase tracking-wide text-fg no-underline hover:text-accent"
        >
          <span>▸ Featured — findu</span>
          <span className="text-accent">Read writeup →</span>
        </Link>
      </div>
    </section>
  );
}
