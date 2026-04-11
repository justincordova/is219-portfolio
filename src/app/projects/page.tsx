import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CURATED_PROJECTS } from "@/content/projects";
import type { GitHubRepo } from "@/types/github";

export const revalidate = 3600;

async function fetchCuratedRepos(): Promise<GitHubRepo[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const results = await Promise.all(
    CURATED_PROJECTS.map(async (name) => {
      const res = await fetch(
        `https://api.github.com/repos/justincordova/${name}`,
        { headers, next: { revalidate: 3600 } },
      );
      if (!res.ok) return null;
      const repo = (await res.json()) as GitHubRepo;
      return {
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at,
        topics: repo.topics ?? [],
      } satisfies GitHubRepo;
    }),
  );
  return results.filter((r): r is GitHubRepo => r !== null);
}

export default async function ProjectsPage() {
  const repos = await fetchCuratedRepos();

  return (
    <>
      <Nav />
      <main id="main">
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Projects
            </p>
            <h1 className="mt-2 font-sans text-4xl font-bold md:text-5xl">
              Everything I've shipped.
            </h1>
            <p className="mt-4 max-w-2xl font-sans text-base text-muted">
              Curated list from my GitHub. Cards link to the repo, except findu,
              which has a full writeup.
            </p>
            <div className="mt-12">
              <ProjectGrid repos={repos} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
