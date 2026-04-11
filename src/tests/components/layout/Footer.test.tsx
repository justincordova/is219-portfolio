import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "@/components/layout/Footer";

describe("Footer", () => {
  it("renders the reinforced Email me CTA", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /email me/i })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:"),
    );
  });

  it("renders GitHub, LinkedIn, and location links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByText(/new jersey/i)).toBeInTheDocument();
  });

  it("renders the last-updated date", () => {
    render(<Footer />);
    expect(screen.getByText(/2026-04-10/)).toBeInTheDocument();
  });
});
