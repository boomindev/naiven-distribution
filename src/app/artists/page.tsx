"use client";

import React from "react";
import { artists, Artist } from "@/data/artists";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, CheckCircle2, User } from "lucide-react";

export default function ArtistsPage() {
  const { t } = useLanguage();

  const isRealUrl = (url: string) => {
    return url && !url.startsWith("[") && (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/"));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header section */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          {t.artists.title}
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base font-normal">
          {t.artists.subtitle}
        </p>
      </div>

      {/* Responsive Artists Grid (3-4 per row on desktop, 1-2 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
        {artists.map((artist) => {
          const hasImage = isRealUrl(artist.image);
          const hasSpotifyUrl = isRealUrl(artist.spotifyUrl);
          const href = hasSpotifyUrl ? artist.spotifyUrl : "#";

          return (
            <div
              key={artist.id}
              className="group flex flex-col rounded-lg bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#333333] transition-all duration-300 overflow-hidden"
            >
              {/* Square Image container */}
              <div className="relative aspect-square w-full bg-[#141414] overflow-hidden flex items-center justify-center">
                {hasImage ? (
                  <img
                    src={artist.image}
                    alt={`Portrait of ${artist.name}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#161616] to-[#0c0c0c] text-neutral-600 p-6 text-center border-b border-[#1b1b1b]"
                    role="img"
                    aria-label={`Placeholder image for artist ${artist.name}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#1f1f1f] flex items-center justify-center mb-3 text-neutral-500 group-hover:text-accent transition-colors">
                      <User size={26} />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
                      [FOTO PLACEHOLDER]
                    </span>
                  </div>
                )}
              </div>

              {/* Card Information */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Verified Badge */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/90 mb-2.5">
                    <CheckCircle2 size={13} className="text-accent" />
                    <span>{t.artists.verifiedBadge}</span>
                  </div>

                  {/* Artist Name */}
                  <h2 className="font-display text-lg font-semibold text-white tracking-tight line-clamp-1 mb-4">
                    {artist.name}
                  </h2>
                </div>

                {/* Spotify Profile Button */}
                <a
                  href={href}
                  target={hasSpotifyUrl ? "_blank" : undefined}
                  rel={hasSpotifyUrl ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!hasSpotifyUrl) {
                      e.preventDefault();
                      alert("Link de Spotify pendiente por configurar en src/data/artists.ts: [LINK DE SPOTIFY]");
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 w-full rounded border border-neutral-800 hover:border-neutral-600 bg-[#121212] hover:bg-[#181818] text-neutral-300 hover:text-white text-xs font-mono py-2.5 px-3 transition-colors duration-200"
                  aria-label={`Open Spotify profile of ${artist.name}`}
                >
                  <span>{t.artists.profileButton}</span>
                  <ExternalLink size={13} className="text-neutral-400" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
