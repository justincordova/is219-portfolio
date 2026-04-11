import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutBlock } from "@/components/home/AboutBlock";

describe("AboutBlock", () => {
  it("renders the section heading", () => {
    render(<AboutBlock />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it("renders the portrait with alt text", () => {
    render(<AboutBlock />);
    expect(screen.getByAltText(/justin cordova/i)).toBeInTheDocument();
  });

  it("mentions Pure Technology Inc", () => {
    render(<AboutBlock />);
    expect(screen.getByText(/pure technology inc/i)).toBeInTheDocument();
  });

  it("mentions the outside-of-code line", () => {
    render(<AboutBlock />);
    expect(screen.getByText(/racquetball/i)).toBeInTheDocument();
  });
});
