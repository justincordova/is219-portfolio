import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { GitHubRepo } from "@/types/github";

const repo: GitHubRepo = {
  name: "findu",
  description: "A finder tool",
  html_url: "https://github.com/justincordova/findu",
  homepage: null,
  language: "TypeScript",
  stargazers_count: 12,
  updated_at: "2026-04-01T00:00:00Z",
  topics: [],
};

describe("ProjectCard", () => {
  it("renders name, description, language, and stars", () => {
    render(<ProjectCard repo={repo} />);
    expect(screen.getByText("findu")).toBeInTheDocument();
    expect(screen.getByText(/a finder tool/i)).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText(/12/)).toBeInTheDocument();
  });

  it("links findu to the local writeup, others to github", () => {
    const { rerender } = render(<ProjectCard repo={repo} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/projects/findu");

    const other = { ...repo, name: "other-project" };
    rerender(<ProjectCard repo={other} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://github.com/justincordova/findu",
    );
  });
});
