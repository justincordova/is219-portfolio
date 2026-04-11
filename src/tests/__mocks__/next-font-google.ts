// Vitest mock for `next/font/google`.
// Next.js font functions use internal Next.js build machinery that isn't
// available in a Vitest/jsdom environment. This stub returns the expected
// shape (an object with a `variable` CSS class and a `className` string).
const makeFontStub =
  (name: string) =>
  ({ variable }: { variable?: string; subsets?: string[]; display?: string }) => ({
    variable: variable ?? `--font-${name.toLowerCase()}`,
    className: `font-${name.toLowerCase()}`,
    style: { fontFamily: name },
  });

export const Geist = makeFontStub("geist-sans");
export const Geist_Mono = makeFontStub("geist-mono");
export const Inter = makeFontStub("inter");
