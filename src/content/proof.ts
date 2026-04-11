export type ProofBlock = {
  id: string;
  title: string;
  subtitle: string;
  image: { src: string; alt: string };
  whatItDoes: string;
  whatChanged: string;
  decision: string;
  stack: readonly string[];
  links: {
    writeup?: string;
    code?: string;
    live?: string;
  };
};

export const proofBlocks: readonly ProofBlock[] = [
  {
    id: "findu",
    title: "findu",
    subtitle: "A tool that demonstrates end-to-end ownership.",
    image: {
      src: "/projects/findu/hero.png",
      alt: "Placeholder — findu hero screenshot",
    },
    whatItDoes:
      "Placeholder: one to two sentences on what findu actually does for the user.",
    whatChanged:
      "Placeholder: plain-language result — who uses it, what it replaced, what got easier.",
    decision:
      "Placeholder: the one judgment call on findu you are most proud of, and why.",
    stack: ["TypeScript", "Next.js", "PostgreSQL"],
    links: {
      writeup: "/projects/findu",
      code: "https://github.com/justincordova/findu",
    },
  },
  {
    id: "dotcor",
    title: "dotcor",
    subtitle: "Placeholder — what dotcor demonstrates.",
    image: {
      src: "/projects/dotcor.png",
      alt: "Placeholder — dotcor screenshot",
    },
    whatItDoes: "Placeholder: what dotcor does.",
    whatChanged: "Placeholder: what changed because of it.",
    decision: "Placeholder: the taste move on dotcor.",
    stack: ["TypeScript", "Node.js"],
    links: {
      code: "https://github.com/justincordova/dotcor",
    },
  },
  {
    id: "cspathfinder",
    title: "cspathfinder",
    subtitle: "Placeholder — what cspathfinder demonstrates.",
    image: {
      src: "/projects/cspathfinder.png",
      alt: "Placeholder — cspathfinder screenshot",
    },
    whatItDoes: "Placeholder: what cspathfinder does.",
    whatChanged: "Placeholder: what changed because of it.",
    decision: "Placeholder: the taste move on cspathfinder.",
    stack: ["TypeScript", "React"],
    links: {
      code: "https://github.com/justincordova/cspathfinder",
    },
  },
] as const;
