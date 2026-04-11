import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the Hero", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: /full-stack engineer/i }),
    ).toBeInTheDocument();
  });

  it("renders three proof blocks", () => {
    render(<Home />);
    expect(screen.getByText(/proof 01/i)).toBeInTheDocument();
    expect(screen.getByText(/proof 02/i)).toBeInTheDocument();
    expect(screen.getByText(/proof 03/i)).toBeInTheDocument();
  });

  it("renders the about and footer sections", () => {
    render(<Home />);
    expect(screen.getByText(/racquetball/i)).toBeInTheDocument();
    expect(screen.getByText(/last updated/i)).toBeInTheDocument();
  });
});
