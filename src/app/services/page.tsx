"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Radio, ShieldCheck, Compass } from "lucide-react";

export default function ServicesPage() {
  const { t } = useLanguage();

  const serviceIcons = [
    <Radio key="1" size={24} className="text-accent" />,
    <ShieldCheck key="2" size={24} className="text-accent" />,
    <Compass key="3" size={24} className="text-accent" />,
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header section */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          {t.services.title}
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base font-normal">
          {t.services.subtitle}
        </p>
      </div>

      {/* Exactly 3 services grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {t.services.items.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-lg bg-[#0e0e0e] border border-[#1f1f1f] p-7 transition-all duration-300 hover:border-[#333333] hover:bg-[#121212]"
          >
            <div>
              {/* Number and Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-11 w-11 rounded-md bg-[#171717] border border-[#262626] flex items-center justify-center">
                  {serviceIcons[index]}
                </div>
                <span className="font-mono text-xs text-neutral-600 font-semibold tracking-wider">
                  0{index + 1}
                </span>
              </div>

              {/* Service Title */}
              <h2 className="font-display text-xl font-semibold text-white tracking-tight mb-3">
                {item.title}
              </h2>

              {/* 1-2 line description */}
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1a1a1a]">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                Core Service
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
