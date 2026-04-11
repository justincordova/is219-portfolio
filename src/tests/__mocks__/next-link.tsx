// Vitest mock for `next/link`.
// Next.js Link uses internal routing machinery unavailable in jsdom.
// This stub renders a plain <a> tag, preserving href and children.
import type React from "react";

const Link = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  [key: string]: unknown;
}) => (
  <a href={href} {...props}>
    {children}
  </a>
);

export default Link;
