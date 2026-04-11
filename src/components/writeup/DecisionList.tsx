import type { Decision } from "@/content/findu";

type Props = { decisions: readonly Decision[] };

export function DecisionList({ decisions }: Props) {
  return (
    <ol className="space-y-8">
      {decisions.map((decision, i) => {
        const label = String(i + 1).padStart(2, "0");
        return (
          <li key={decision.title} className="border-l border-border pl-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Decision {label}
            </p>
            <h3 className="mt-1 font-sans text-2xl font-bold">{decision.title}</h3>
            <p className="mt-2 font-sans text-base text-fg">{decision.body}</p>
          </li>
        );
      })}
    </ol>
  );
}
