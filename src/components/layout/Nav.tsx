import Link from "next/link";
import { profile } from "@/content/profile";

export function Nav() {
  return (
    <nav className="scratch-divider">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 font-mono text-sm uppercase tracking-wide">
        <Link href="/" className="text-fg no-underline hover:text-accent">
          {profile.name}
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/projects" className="text-fg no-underline hover:text-accent">
            Projects
          </Link>
          <a href={`mailto:${profile.email}`} className="text-fg no-underline hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </nav>
  );
}
