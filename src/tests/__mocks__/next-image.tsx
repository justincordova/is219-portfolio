import type { ImageProps } from "next/image";

export default function Image({ src, alt, width, height, className }: ImageProps) {
  return <img src={src as string} alt={alt} width={width} height={height} className={className} />;
}
