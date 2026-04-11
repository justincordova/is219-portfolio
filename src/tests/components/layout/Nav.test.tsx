import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nav } from "@/components/layout/Nav";

describe("Nav", () => {
  it("renders the name as a link to home", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: /justin cordova/i })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("renders a projects link", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: /projects/i })).toHaveAttribute(
      "href",
      "/projects",
    );
  });

  it("renders an email link", () => {
    render(<Nav />);
    expect(
      screen.getByRole("link", { name: /email/i }),
    ).toHaveAttribute("href", expect.stringContaining("mailto:"));
  });
});
