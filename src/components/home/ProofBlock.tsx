import Image from "next/image";
import Link from "next/link";
import type { ProofBlock as ProofBlockType } from "@/content/proof";

type Props = { block: ProofBlockType; index: number };

export function ProofBlock({ block, index }: Props) {
  const label = `PROOF ${String(index).padStart(2, "0")}`;
  return (
    <article className="scratch-divider">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <p className="font-mono text-xs uppercase tracking-widest text-rust">{label}</p>
        <h2 className="grunge-heading mt-2 font-sans text-3xl font-bold md:text-4xl">
          {block.title}
        </h2>
        <p className="mt-2 font-sans text-lg text-muted">{block.subtitle}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="grunge-image rough-border overflow-hidden">
            <Image
              src={block.image.src}
              alt={block.image.alt}
              width={640}
              height={400}
              className="h-auto w-full"
            />
          </div>
          <dl className="space-y-4 font-sans text-base">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                What it does
              </dt>
              <dd className="mt-1">{block.whatItDoes}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                What changed
              </dt>
              <dd className="mt-1">{block.whatChanged}</dd>
            </div>
            <div className="border-l-2 border-rust pl-4">
              <dt className="font-mono text-xs uppercase tracking-widest text-rust">
                The decision
              </dt>
              <dd className="mt-1">{block.decision}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">Stack</dt>
              <dd className="mt-1 flex flex-wrap gap-2">
                {block.stack.map((item) => (
                  <span key={item} className="rough-border px-2 py-1 font-mono text-xs">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm uppercase">
          {block.links.writeup && (
            <Link href={block.links.writeup} className="text-accent">
              Read the full writeup →
            </Link>
          )}
          {block.links.code && (
            <a
              href={block.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg hover:text-accent"
            >
              Code ↗
            </a>
          )}
          {block.links.live && (
            <a
              href={block.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg hover:text-accent"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
