import { describe, expect, it } from "vitest";
import { proofBlocks } from "@/content/proof";

describe("proofBlocks", () => {
  it("has exactly three entries", () => {
    expect(proofBlocks).toHaveLength(3);
  });

  it("leads with findu", () => {
    expect(proofBlocks[0].id).toBe("findu");
  });

  it("findu links to its writeup page", () => {
    expect(proofBlocks[0].links.writeup).toBe("/projects/findu");
  });

  it("every block has all required fields", () => {
    for (const block of proofBlocks) {
      expect(block.title).toBeTruthy();
      expect(block.whatItDoes).toBeTruthy();
      expect(block.whatChanged).toBeTruthy();
      expect(block.decision).toBeTruthy();
      expect(block.stack.length).toBeGreaterThan(0);
      expect(block.image.alt).toBeTruthy();
    }
  });
});
