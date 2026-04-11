import type { GitHubRepo } from "@/types/github";

export async function fetchRepos(names: readonly string[]): Promise<GitHubRepo[]> {
  const res = await fetch(`/api/github/repos?names=${names.join(",")}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return (await res.json()) as GitHubRepo[];
}
