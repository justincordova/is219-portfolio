import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer>
      <section className="border-b border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-16">
          <p className="font-sans text-2xl font-bold md:text-3xl">
            Want to talk? Send an email.
          </p>
          <Button href={`mailto:${profile.email}`} variant="primary">
            Email me →
          </Button>
        </div>
      </section>
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 font-mono text-xs uppercase tracking-widest text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`} className="text-muted hover:text-accent">
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent"
          >
            LinkedIn
          </a>
          <span>{profile.location}</span>
        </div>
        <span>Last updated {profile.lastUpdated}</span>
      </div>
    </footer>
  );
}
