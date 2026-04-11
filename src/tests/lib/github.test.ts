import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchRepos } from "@/lib/github";

describe("fetchRepos", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("calls the internal proxy route with a comma-separated names param", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify([]), { status: 200 }),
    );

    await fetchRepos(["findu", "dotcor"]);

    expect(fetchSpy).toHaveBeenCalledWith("/api/github/repos?names=findu,dotcor");
  });

  it("throws when the proxy returns a non-ok status", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("boom", { status: 500 }),
    );

    await expect(fetchRepos(["findu"])).rejects.toThrow(/API error: 500/);
  });
});
