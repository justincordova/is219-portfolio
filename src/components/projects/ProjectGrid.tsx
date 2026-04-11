import type { GitHubRepo } from "@/types/github";
import { ProjectCard } from "@/components/projects/ProjectCard";

type Props = { repos: readonly GitHubRepo[] };

export function ProjectGrid({ repos }: Props) {
  if (repos.length === 0) {
    return (
      <p className="font-mono text-sm text-muted">No projects to show.</p>
    );
  }
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <ProjectCard key={repo.name} repo={repo} />
      ))}
    </div>
  );
}
