type Props = {
  language: string;
  code: string;
  caption?: string;
};

export function CodeSnippet({ language, code, caption }: Props) {
  return (
    <figure className="border border-border">
      <div className="border-b border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted">
        {language}
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
      {caption && (
        <figcaption className="border-t border-border px-4 py-2 font-mono text-xs text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
