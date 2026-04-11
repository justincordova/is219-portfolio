import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DecisionList } from "@/components/writeup/DecisionList";

describe("DecisionList", () => {
  it("renders each decision with title and body", () => {
    const decisions = [
      { title: "Chose Postgres", body: "Because of JSONB." },
      { title: "Used Next.js", body: "Because of RSC." },
    ];
    render(<DecisionList decisions={decisions} />);
    expect(screen.getByText(/chose postgres/i)).toBeInTheDocument();
    expect(screen.getByText(/because of jsonb/i)).toBeInTheDocument();
    expect(screen.getByText(/used next\.js/i)).toBeInTheDocument();
    expect(screen.getByText(/because of rsc/i)).toBeInTheDocument();
  });

  it("numbers decisions starting at 01", () => {
    render(
      <DecisionList
        decisions={[
          { title: "A", body: "a" },
          { title: "B", body: "b" },
        ]}
      />,
    );
    expect(screen.getByText(/01/)).toBeInTheDocument();
    expect(screen.getByText(/02/)).toBeInTheDocument();
  });
});
