"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Wordmark } from "@/components/Wordmark";
import { Menu, X, Globe } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/artists", label: t.nav.artists },
    { href: "/services", label: t.nav.services },
    { href: "/partners", label: t.nav.partners },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#1f1f1f] shadow-lg shadow-black/40 py-3.5"
          : "bg-[#080808]/70 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark Brand */}
        <Wordmark />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs tracking-[0.16em] uppercase font-medium transition-colors py-1 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Language Switcher (EN | ES) */}
        <div className="hidden md:flex items-center space-x-2 pl-4 border-l border-neutral-800 text-xs font-mono tracking-wider">
          <button
            onClick={() => setLang("en")}
            className={`px-1.5 py-0.5 transition-colors ${
              lang === "en"
                ? "text-white font-semibold border-b border-accent"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <span className="text-neutral-700">|</span>
          <button
            onClick={() => setLang("es")}
            className={`px-1.5 py-0.5 transition-colors ${
              lang === "es"
                ? "text-white font-semibold border-b border-accent"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
            aria-label="Cambiar a Español"
          >
            ES
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0c] border-b border-[#222222] px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm tracking-[0.16em] uppercase font-medium transition-colors py-2 flex items-center justify-between ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher inside Mobile Menu */}
          <div className="mt-6 pt-6 border-t border-[#1f1f1f] flex items-center justify-between">
            <span className="text-xs text-neutral-500 tracking-wider uppercase flex items-center gap-1.5">
              <Globe size={14} className="text-neutral-400" />
              {t.nav.switchLang}
            </span>
            <div className="flex items-center space-x-3 text-xs font-mono">
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === "en"
                    ? "bg-accent/15 text-accent font-semibold border border-accent/40"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                EN
              </button>
              <span className="text-neutral-700">/</span>
              <button
                onClick={() => setLang("es")}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === "es"
                    ? "bg-accent/15 text-accent font-semibold border border-accent/40"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
