import Link from "next/link";

interface WordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Wordmark({ className = "", size = "md" }: WordmarkProps) {
  const isSm = size === "sm";
  const isLg = size === "lg";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col select-none transition-opacity hover:opacity-90 ${className}`}
      aria-label="NAIVEN DISTRIBUTION - Home"
    >
      <span
        className={`font-display font-bold tracking-[0.28em] text-white transition-colors duration-200 group-hover:text-accent ${
          isSm ? "text-base" : isLg ? "text-2xl" : "text-lg"
        }`}
      >
        NAIVEN
      </span>
      <span
        className={`font-sans font-medium uppercase text-neutral-400 tracking-[0.34em] transition-colors duration-200 group-hover:text-neutral-300 ${
          isSm ? "text-[8px]" : isLg ? "text-[11px]" : "text-[9px]"
        }`}
      >
        DISTRIBUTION
      </span>
    </Link>
  );
}
