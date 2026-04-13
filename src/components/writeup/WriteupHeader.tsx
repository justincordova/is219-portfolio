type Props = {
  title: string;
  promise: string;
};

export function WriteupHeader({ title, promise }: Props) {
  return (
    <header className="scratch-divider stain-accent">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-rust">Writeup</p>
        <h1 className="grunge-heading mt-2 font-sans text-5xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-6 font-sans text-xl text-fg">{promise}</p>
      </div>
    </header>
  );
}
