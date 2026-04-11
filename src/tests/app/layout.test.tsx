import { describe, expect, it } from "vitest";
import { metadata } from "@/app/layout";

describe("root layout metadata", () => {
  it("has a specific title matching the promise", () => {
    expect(metadata.title).toBe("Justin Cordova — Full-Stack Engineer");
  });

  it("has a description stating the promise", () => {
    expect(metadata.description).toContain("thoughtful full-stack software");
  });
});
