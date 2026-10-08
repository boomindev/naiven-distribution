"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Copy, Check } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const directEmail = "contact@naivendistribution.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(directEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col items-start justify-center">
      {/* Title */}
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-4">
        {t.contact.title}
      </h1>

      {/* Subtitle */}
      <p className="text-neutral-400 text-sm sm:text-base font-normal max-w-xl mb-10">
        {t.contact.subtitle}
      </p>

      {/* Minimalist Contact Card matching reference */}
      <div className="w-full max-w-lg rounded-lg bg-[#0c0c0c] border border-[#1f1f1f] p-7 sm:p-8 shadow-2xl shadow-black/60">
        {/* Email Address Section */}
        <div className="mb-7">
          <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-400 mb-2.5">
            {t.contact.emailAddressLabel}
          </span>

          <div className="flex items-center justify-between gap-3 flex-wrap">
            <a
              href={`mailto:${directEmail}`}
              className="font-mono text-base sm:text-lg font-bold text-[#00f5d4] hover:underline transition-colors break-all"
              aria-label={`Send email to ${directEmail}`}
            >
              {directEmail}
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-mono transition-all duration-200 border ${
                copied
                  ? "bg-emerald-950/60 border-accent text-accent"
                  : "bg-[#141414] hover:bg-[#1c1c1c] border-neutral-800 text-neutral-400 hover:text-white"
              }`}
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-accent" />
                  <span>{t.contact.copiedEmail}</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>{t.contact.copyEmail}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* General Support Section */}
        <div className="pt-2">
          <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-400 mb-2">
            {t.contact.generalSupportLabel}
          </span>
          <p className="text-neutral-300 text-sm font-sans font-normal leading-relaxed">
            {t.contact.generalSupportText}
          </p>
        </div>
      </div>
    </div>
  );
}
