import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders children inside an anchor when href is provided", () => {
    render(<Button href="mailto:test@test.com">Email me</Button>);
    const link = screen.getByRole("link", { name: /email me/i });
    expect(link).toHaveAttribute("href", "mailto:test@test.com");
  });

  it("renders a button element when no href is provided", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button", { name: /click/i })).toBeInTheDocument();
  });

  it("applies primary variant classes by default", () => {
    render(<Button>Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("border-accent");
  });

  it("applies secondary variant classes when variant='secondary'", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("border-border");
  });
});
