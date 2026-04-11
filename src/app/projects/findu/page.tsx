import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WriteupHeader } from "@/components/writeup/WriteupHeader";
import { DecisionList } from "@/components/writeup/DecisionList";
import { CodeSnippet } from "@/components/writeup/CodeSnippet";
import type { Metadata } from "next";
import { finduWriteup } from "@/content/findu";

export const metadata: Metadata = {
  title: "findu — Justin Cordova",
  description: finduWriteup.promise,
};

export default function FinduWriteupPage() {
  const w = finduWriteup;
  return (
    <>
      <Nav />
      <main id="main">
        <WriteupHeader title={w.title} promise={w.promise} />

        <article className="mx-auto max-w-3xl px-6 py-12">
          <section>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              The problem
            </p>
            <p className="mt-2 font-sans text-lg leading-relaxed">
              {w.problem}
            </p>
          </section>

          <section className="mt-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              The decisions
            </p>
            <div className="mt-6">
              <DecisionList decisions={w.decisions} />
            </div>
          </section>

          <section className="mt-16 space-y-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Screenshots
            </p>
            {w.screenshots.map((shot) => (
              <figure key={shot.src} className="border border-border">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={960}
                  height={540}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-border px-4 py-2 font-mono text-xs text-muted">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </section>

          <section className="mt-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              In code
            </p>
            <div className="mt-4">
              <CodeSnippet
                language={w.codeSnippet.language}
                code={w.codeSnippet.code}
                caption={w.codeSnippet.caption}
              />
            </div>
          </section>

          <section className="mt-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              What changed
            </p>
            <p className="mt-2 font-sans text-lg leading-relaxed">
              {w.result}
            </p>
          </section>

          <section className="mt-16 flex flex-wrap items-center gap-4 border-t border-border pt-6 font-mono text-sm uppercase">
            {w.links.code && (
              <a
                href={w.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                Code ↗
              </a>
            )}
            {w.links.live && (
              <a
                href={w.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                Live ↗
              </a>
            )}
            <Link href="/" className="ml-auto text-fg hover:text-accent">
              ← Back home
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
