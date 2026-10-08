export type Language = "en" | "es";

export interface TranslationContent {
  nav: {
    home: string;
    artists: string;
    services: string;
    partners: string;
    contact: string;
    switchLang: string;
    menuOpen: string;
    menuClose: string;
  };
  footer: {
    rights: string;
    tagline: string;
    allRightsReserved: string;
  };
  home: {
    badge: string;
    headline: string;
    subheadline: string;
    applyButton: string;
    rosterButton: string;
  };
  artists: {
    title: string;
    subtitle: string;
    verifiedBadge: string;
    profileButton: string;
    emptyNote: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  partners: {
    title: string;
    subtitle: string;
    deliveryNote: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailAddressLabel: string;
    emailAddress: string;
    generalSupportLabel: string;
    generalSupportText: string;
    copyEmail: string;
    copiedEmail: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      home: "Home",
      artists: "Artists",
      services: "Services",
      partners: "Partners",
      contact: "Contact",
      switchLang: "Language",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Boutique digital music distribution for independent creators.",
      allRightsReserved: "© 2026 Naiven Distribution. All rights reserved.",
    },
    home: {
      badge: "DIGITAL MUSIC DISTRIBUTION",
      headline: "WE CONNECT YOUR MUSIC TO THE WORLD.",
      subheadline:
        "Direct digital distribution, artist profile management, and strategic release planning built to elevate independent music.",
      applyButton: "APPLY NOW",
      rosterButton: "VIEW ROSTER",
    },
    artists: {
      title: "Our Roster",
      subtitle: "A curated collective of independent musicians, producers, and songwriters.",
      verifiedBadge: "Spotify Verified Artist",
      profileButton: "Spotify Profile",
      emptyNote: "New artist profiles are added upon release confirmation.",
    },
    services: {
      title: "Our Services",
      subtitle: "Focused infrastructure designed for clarity, control, and musical momentum.",
      items: [
        {
          id: "distribution",
          title: "Digital Distribution",
          description:
            "Delivery of your music to key platforms including Spotify, Apple Music, YouTube Music, and Amazon Music.",
        },
        {
          id: "management",
          title: "Profile Management",
          description:
            "Hands-on assistance with artist profile verification and catalogue administration across digital streaming services.",
        },
        {
          id: "strategy",
          title: "Support & Strategy",
          description:
            "Tailored guidance to plan your release schedules and maximize the visibility of every single.",
        },
      ],
    },
    partners: {
      title: "Our Partners",
      subtitle: "Delivering your catalog directly across major global streaming services.",
      deliveryNote:
        "Global ingest protocols ensure releases are delivered accurately and on schedule to premier DSPs.",
    },
    contact: {
      title: "CONTACT US",
      subtitle: "Get in touch with our team for distribution inquiries or support.",
      emailAddressLabel: "EMAIL ADDRESS",
      emailAddress: "contact@naivendistribution.com",
      generalSupportLabel: "GENERAL SUPPORT",
      generalSupportText: "Responses within 24 to 48 business hours.",
      copyEmail: "Copy",
      copiedEmail: "Copied",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      artists: "Artistas",
      services: "Servicios",
      partners: "Plataformas",
      contact: "Contacto",
      switchLang: "Idioma",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Distribuidora musical digital boutique para creadores independientes.",
      allRightsReserved: "© 2026 Naiven Distribution. All rights reserved.",
    },
    home: {
      badge: "DIGITAL MUSIC DISTRIBUTION",
      headline: "WE CONNECT YOUR MUSIC TO THE WORLD.",
      subheadline:
        "Distribución digital directa, gestión de perfiles de artista y planificación estratégica para potenciar la música independiente.",
      applyButton: "APPLY NOW",
      rosterButton: "VIEW ROSTER",
    },
    artists: {
      title: "Our Roster",
      subtitle: "Un colectivo seleccionado de músicos, productores y compositores independientes.",
      verifiedBadge: "Spotify Verified Artist",
      profileButton: "Spotify Profile",
      emptyNote: "Se incorporan nuevos perfiles con cada confirmación de lanzamiento.",
    },
    services: {
      title: "Our Services",
      subtitle: "Infraestructura enfocada diseñada para brindar claridad, control y alcance a tu música.",
      items: [
        {
          id: "distribution",
          title: "Digital Distribution",
          description:
            "Entrega de música a plataformas como Spotify, Apple Music, YouTube Music y Amazon Music.",
        },
        {
          id: "management",
          title: "Profile Management",
          description:
            "Ayuda con verificación de perfiles de artista y administración de catálogo en las principales tiendas digitales.",
        },
        {
          id: "strategy",
          title: "Support & Strategy",
          description:
            "Guía para planificar lanzamientos y maximizar el alcance de cada single.",
        },
      ],
    },
    partners: {
      title: "Our Partners",
      subtitle: "Entregamos tu catálogo en los principales servicios de streaming del mundo.",
      deliveryNote:
        "Protocolos de entrega directa que aseguran la puntualidad y fidelidad de cada lanzamiento.",
    },
    contact: {
      title: "CONTACT US",
      subtitle: "Ponte en contacto con nuestro equipo para consultas de distribución o soporte.",
      emailAddressLabel: "EMAIL ADDRESS",
      emailAddress: "contact@naivendistribution.com",
      generalSupportLabel: "GENERAL SUPPORT",
      generalSupportText: "Respuestas en un plazo de 24 a 48 horas hábiles.",
      copyEmail: "Copiar",
      copiedEmail: "Copiado",
    },
  },
};
