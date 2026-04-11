import type { GitHubRepo } from "@/types/github";

export const revalidate = 3600;

const GITHUB_USER = "justincordova";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const namesParam = searchParams.get("names");

  if (!namesParam) {
    return Response.json({ error: "missing names param" }, { status: 400 });
  }

  const names = namesParam.split(",").map((n) => n.trim()).filter(Boolean);

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const results = await Promise.all(
    names.map(async (name) => {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_USER}/${name}`,
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

  const filtered = results.filter((r): r is GitHubRepo => r !== null);
  return Response.json(filtered);
}
