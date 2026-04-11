import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProofBlock } from "@/components/home/ProofBlock";
import type { ProofBlock as ProofBlockType } from "@/content/proof";

const fixture: ProofBlockType = {
  id: "test",
  title: "test-project",
  subtitle: "A test thing.",
  image: { src: "/test.png", alt: "Test screenshot" },
  whatItDoes: "It performs the core functionality.",
  whatChanged: "Things got better.",
  decision: "I chose X because Y.",
  stack: ["TypeScript", "React"],
  links: { code: "https://example.com/code", live: "https://example.com/live" },
};

describe("ProofBlock", () => {
  it("renders the title and subtitle", () => {
    render(<ProofBlock block={fixture} index={1} />);
    expect(screen.getByText(/test-project/i)).toBeInTheDocument();
    expect(screen.getByText(/a test thing/i)).toBeInTheDocument();
  });

  it("renders the numbered block label", () => {
    render(<ProofBlock block={fixture} index={1} />);
    expect(screen.getByText(/proof 01/i)).toBeInTheDocument();
  });

  it("renders image with alt text", () => {
    render(<ProofBlock block={fixture} index={1} />);
    expect(screen.getByAltText("Test screenshot")).toBeInTheDocument();
  });

  it("renders what it does, what changed, and the decision", () => {
    render(<ProofBlock block={fixture} index={1} />);
    expect(screen.getByText(/it performs the core functionality/i)).toBeInTheDocument();
    expect(screen.getByText(/things got better/i)).toBeInTheDocument();
    expect(screen.getByText(/i chose x because y/i)).toBeInTheDocument();
  });

  it("renders stack chips", () => {
    render(<ProofBlock block={fixture} index={1} />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders Code and Live links when present", () => {
    render(<ProofBlock block={fixture} index={1} />);
    expect(screen.getByRole("link", { name: /code/i })).toHaveAttribute(
      "href",
      "https://example.com/code",
    );
    expect(screen.getByRole("link", { name: /live/i })).toHaveAttribute(
      "href",
      "https://example.com/live",
    );
  });

  it("renders a writeup link when provided", () => {
    const withWriteup = { ...fixture, links: { ...fixture.links, writeup: "/projects/test" } };
    render(<ProofBlock block={withWriteup} index={1} />);
    expect(screen.getByRole("link", { name: /read the full writeup/i })).toHaveAttribute(
      "href",
      "/projects/test",
    );
  });
});
