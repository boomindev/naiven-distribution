"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Disc3 } from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="relative flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Subtle background ambient radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-25"
        aria-hidden="true"
      >
        <div className="h-[460px] w-[720px] rounded-full bg-accent/20 blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Top small label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-[#0f0f0f] px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-300 mb-8 transition-colors hover:border-neutral-700">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span>{t.home.badge}</span>
        </div>

        {/* Large original headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-extrabold tracking-tight text-white leading-[1.06] mb-8 uppercase">
          {t.home.headline}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-400 font-normal leading-relaxed mb-10 tracking-normal">
          {t.home.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-md bg-accent hover:bg-accent-hover text-black font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 transition-all duration-200 shadow-md shadow-accent/20 hover:shadow-accent/40 active:scale-[0.98]"
          >
            <span>{t.home.applyButton}</span>
            <ArrowRight size={15} />
          </Link>

          <Link
            href="/artists"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-md border border-neutral-700 hover:border-neutral-500 bg-[#0d0d0d] hover:bg-[#151515] text-neutral-200 hover:text-white font-medium text-xs uppercase tracking-[0.18em] px-8 py-4 transition-all duration-200 active:scale-[0.98]"
          >
            <Disc3 size={15} className="text-neutral-400" />
            <span>{t.home.rosterButton}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
