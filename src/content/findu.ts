export type Decision = {
  title: string;
  body: string;
};

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

export const finduWriteup = {
  slug: "findu",
  title: "findu",
  promise: "Placeholder — one-line promise for findu.",
  problem:
    "Placeholder: three to five sentences describing the problem findu solves and who it is for.",
  decisions: [
    {
      title: "Placeholder — decision 1 title",
      body: "Placeholder: what the decision was, what the alternatives were, and why you chose this one.",
    },
    {
      title: "Placeholder — decision 2 title",
      body: "Placeholder: the reasoning on a second judgment call.",
    },
  ] satisfies Decision[],
  screenshots: [
    {
      src: "/projects/findu/hero.png",
      alt: "Placeholder — findu hero screenshot",
      caption: "Placeholder — caption describing the screenshot.",
    },
    {
      src: "/projects/findu/decision-1.png",
      alt: "Placeholder — findu decision screenshot",
      caption: "Placeholder — caption describing the screenshot.",
    },
  ] satisfies Screenshot[],
  codeSnippet: {
    language: "typescript",
    code:
      "// Placeholder code snippet\nexport function placeholder() {\n  return 'findu';\n}\n",
    caption: "Placeholder — why this snippet matters.",
  },
  result: "Placeholder: plain-language result.",
  stack: ["TypeScript", "Next.js", "PostgreSQL"] as const,
  links: {
    code: "https://github.com/justincordova/findu",
    live: undefined as string | undefined,
  },
} as const;
