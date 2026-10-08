"use client";

import React from "react";
import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-[#1a1a1a] bg-[#070707] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#141414]">
          {/* Wordmark */}
          <div className="flex flex-col gap-2">
            <Wordmark size="md" />
            <p className="text-xs text-neutral-500 max-w-sm font-sans tracking-wide">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick links & Contact */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 text-xs">
            <div className="flex items-center space-x-6 text-neutral-400">
              <Link href="/" className="hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <Link href="/artists" className="hover:text-white transition-colors">
                {t.nav.artists}
              </Link>
              <Link href="/services" className="hover:text-white transition-colors">
                {t.nav.services}
              </Link>
              <Link href="/partners" className="hover:text-white transition-colors">
                {t.nav.partners}
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                {t.nav.contact}
              </Link>
            </div>

            <a
              href="mailto:contact@naivendistribution.com"
              className="text-neutral-300 hover:text-accent font-mono transition-colors tracking-tight text-xs border border-[#222222] hover:border-accent/40 bg-[#0e0e0e] px-3 py-1.5 rounded"
            >
              contact@naivendistribution.com
            </a>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-neutral-500 font-sans">
          <p>© 2026 Naiven Distribution. All rights reserved.</p>
          <p className="font-mono text-neutral-600">https://naivendistribution.com</p>
        </div>
      </div>
    </footer>
  );
}
