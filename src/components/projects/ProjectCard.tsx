import Link from "next/link";
import type { GitHubRepo } from "@/types/github";

type Props = { repo: GitHubRepo };

export function ProjectCard({ repo }: Props) {
  const isFindu = repo.name === "findu";
  const href = isFindu ? "/projects/findu" : repo.html_url;
  const external = !isFindu;

  const card = (
    <>
      <div className="flex items-baseline justify-between">
        <h3 className="font-sans text-lg font-bold">{repo.name}</h3>
        <span className="font-mono text-xs text-muted">★ {repo.stargazers_count}</span>
      </div>
      <p className="mt-2 min-h-[3em] font-sans text-sm text-muted">
        {repo.description ?? "No description."}
      </p>
      <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase text-muted">
        {repo.language && <span className="border border-border px-2 py-1">{repo.language}</span>}
      </div>
    </>
  );

  const baseClasses = "block rough-border p-5 no-underline transition-colors hover:border-accent";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {card}
      </a>
    );
  }
  return (
    <Link href={href} className={baseClasses}>
      {card}
    </Link>
  );
}
