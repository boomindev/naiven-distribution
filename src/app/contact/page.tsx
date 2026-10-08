"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Copy, Check, Send, AlertCircle, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    spotifyLink: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          spotifyLink: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data?.error || t.contact.form.errorMessage);
      }
    } catch {
      setStatus("error");
      setErrorMessage(t.contact.form.errorMessage);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header section */}
      <div className="max-w-2xl mb-12">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          {t.contact.title}
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base font-normal">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Direct Email Card & Details */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div className="rounded-lg bg-[#0e0e0e] border border-[#1f1f1f] p-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              {t.contact.directEmailLabel}
            </span>

            <div>
              <div className="font-mono text-sm sm:text-base text-neutral-200 break-all mb-4 select-all">
                {directEmail}
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className={`inline-flex items-center gap-2 rounded px-3.5 py-2 text-xs font-mono transition-all duration-200 border ${
                  copied
                    ? "bg-emerald-950/60 border-accent text-accent"
                    : "bg-[#141414] hover:bg-[#1a1a1a] border-neutral-800 text-neutral-300 hover:text-white"
                }`}
                aria-label="Copy direct email address"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-accent" />
                    <span>{t.contact.copiedEmail}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>{t.contact.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="hidden md:block pt-6">
            <p className="text-xs text-neutral-500 font-sans leading-relaxed">
              Submissions are evaluated on sound, catalog consistency, and release feasibility. Please include valid streaming links whenever possible.
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="md:col-span-7">
          <div className="rounded-lg bg-[#0e0e0e] border border-[#1f1f1f] p-6 sm:p-8">
            {status === "success" ? (
              <div className="py-8 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-950/50 border border-accent/40 flex items-center justify-center mx-auto text-accent">
                  <CheckCircle size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Application Received
                </h3>
                <p className="text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
                  {t.contact.form.successMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 inline-flex items-center text-xs font-mono text-accent hover:underline"
                >
                  Send another submission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="p-3.5 rounded bg-red-950/40 border border-red-900/60 text-red-200 text-xs flex items-start gap-2.5">
                    <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <span>{errorMessage || t.contact.form.errorMessage}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="artist-name"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                  >
                    {t.contact.form.nameLabel} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="artist-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full rounded bg-[#131313] border border-neutral-800 focus:border-accent focus:ring-1 focus:ring-accent text-neutral-200 placeholder-neutral-600 text-sm px-3.5 py-2.5 transition-colors outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="artist-email"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                  >
                    {t.contact.form.emailLabel} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="artist-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full rounded bg-[#131313] border border-neutral-800 focus:border-accent focus:ring-1 focus:ring-accent text-neutral-200 placeholder-neutral-600 text-sm px-3.5 py-2.5 transition-colors outline-none"
                  />
                </div>

                {/* Spotify Link */}
                <div>
                  <label
                    htmlFor="artist-spotify"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                  >
                    {t.contact.form.spotifyLabel}
                  </label>
                  <input
                    id="artist-spotify"
                    type="url"
                    value={formData.spotifyLink}
                    onChange={(e) => setFormData({ ...formData, spotifyLink: e.target.value })}
                    placeholder={t.contact.form.spotifyPlaceholder}
                    className="w-full rounded bg-[#131313] border border-neutral-800 focus:border-accent focus:ring-1 focus:ring-accent text-neutral-200 placeholder-neutral-600 text-sm px-3.5 py-2.5 transition-colors outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="artist-message"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                  >
                    {t.contact.form.messageLabel} <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="artist-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full rounded bg-[#131313] border border-neutral-800 focus:border-accent focus:ring-1 focus:ring-accent text-neutral-200 placeholder-neutral-600 text-sm px-3.5 py-2.5 transition-colors outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded bg-accent hover:bg-accent-hover disabled:opacity-50 text-black font-semibold text-xs uppercase tracking-[0.18em] py-3.5 px-4 transition-all duration-200 shadow-md shadow-accent/20 cursor-pointer disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                  <span>
                    {status === "submitting"
                      ? t.contact.form.submitting
                      : t.contact.form.submitButton}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
