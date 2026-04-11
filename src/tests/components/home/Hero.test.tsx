import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/home/Hero";

describe("Hero", () => {
  it("renders the promise as the h1", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/full-stack engineer/i);
  });

  it("renders the sub-promise sentence", () => {
    render(<Hero />);
    expect(screen.getByText(/thoughtful full-stack software/i)).toBeInTheDocument();
  });

  it("renders the primary CTA as Email me", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /email me/i }),
    ).toHaveAttribute("href", expect.stringContaining("mailto:"));
  });

  it("renders the secondary CTA linking to the resume", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute(
      "href",
      "/resume.pdf",
    );
  });

  it("renders the featured-findu strip above the fold", () => {
    render(<Hero />);
    expect(screen.getByText(/featured — findu/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /read writeup/i }),
    ).toHaveAttribute("href", "/projects/findu");
  });
});
