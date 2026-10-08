"use client";

import React from "react";
import { partners } from "@/data/partners";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnersPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header section */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          {t.partners.title}
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base font-normal">
          {t.partners.subtitle}
        </p>
      </div>

      {/* Clean text wordmark grid (no heavy image assets) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="group flex flex-col justify-between h-32 rounded-lg bg-[#0d0d0d] border border-[#1f1f1f] p-5 transition-all duration-200 hover:border-[#383838] hover:bg-[#121212]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-500 group-hover:text-accent transition-colors">
                {partner.category}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-700 group-hover:bg-accent transition-colors" />
            </div>

            {/* Platform name in sleek typography */}
            <div className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors">
              {partner.name}
            </div>
          </div>
        ))}
      </div>

      {/* Honest and realistic distribution scope notice */}
      <div className="mt-14 max-w-2xl border-l-2 border-neutral-800 pl-4 py-1 text-xs text-neutral-500 leading-relaxed font-sans">
        <p>{t.partners.deliveryNote}</p>
      </div>
    </div>
  );
}
