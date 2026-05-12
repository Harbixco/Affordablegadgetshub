import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function LazyImage({ src, alt, className }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Skeleton / Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`transition duration-500 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        } ${className}`}
      />
    </div>
  );
}