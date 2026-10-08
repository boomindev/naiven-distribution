export interface Partner {
  id: string;
  name: string;
  category: "DSP" | "Video & Social" | "Streaming";
  description?: string;
}

/**
 * ARCHIVO EDITABLE DE PLATAFORMAS / PARTNERS
 * Lista de destinos digitales soportados para distribución y entrega de catálogo.
 *
 * NOTA: Bloque opcional "Infrastructure" ([FUGA / AUDIOSALAD]) no incluido
 * hasta confirmación expresa del usuario.
 */
export const partners: Partner[] = [
  {
    id: "spotify",
    name: "Spotify",
    category: "Streaming",
  },
  {
    id: "apple-music",
    name: "Apple Music",
    category: "Streaming",
  },
  {
    id: "youtube-music",
    name: "YouTube Music",
    category: "Streaming",
  },
  {
    id: "amazon-music",
    name: "Amazon Music",
    category: "Streaming",
  },
  {
    id: "deezer",
    name: "Deezer",
    category: "Streaming",
  },
  {
    id: "tidal",
    name: "Tidal",
    category: "Streaming",
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    category: "Streaming",
  },
  {
    id: "tiktok",
    name: "TikTok",
    category: "Video & Social",
  },
];
