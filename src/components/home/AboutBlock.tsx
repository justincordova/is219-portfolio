import Image from "next/image";

export function AboutBlock() {
  return (
    <section className="scratch-divider">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-rust">About</p>
        <div className="mt-6 grid gap-8 md:grid-cols-[240px_1fr]">
          <div className="grunge-image tape-strip rough-border overflow-hidden">
            <Image
              src="/about.png"
              alt="Justin Cordova"
              width={240}
              height={240}
              className="h-auto w-full"
            />
          </div>
          <div className="space-y-4 font-sans text-base md:text-lg">
            <p>
              I'm a software developer intern at{" "}
              <a href="https://pureittech.com/" target="_blank" rel="noopener noreferrer">
                Pure Technology Inc
              </a>
              , shipping a POS system in C# and .NET. Full stack across TypeScript, React, Node,
              Next.js, PostgreSQL. Recently learning Go for backend tooling and small CLIs.
            </p>
            <p className="text-muted">
              Outside code: racquetball, tennis, the gym, and photography. Always down to explore
              new places.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
