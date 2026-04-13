import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  download?: boolean | string;
  external?: boolean;
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  download,
  external,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 border-2 px-4 py-2 font-mono text-sm uppercase tracking-wide no-underline transition-colors";
  const variants = {
    primary:
      "border-accent text-accent hover:bg-accent hover:text-bg shadow-[2px_2px_0_rgba(160,82,45,0.4)]",
    secondary:
      "border-border text-fg hover:border-accent hover:text-accent shadow-[2px_2px_0_rgba(0,0,0,0.4)]",
  };
  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(download ? { download: typeof download === "string" ? download : "" } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
