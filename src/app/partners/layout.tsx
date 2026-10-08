import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Delivering your catalog directly across major global streaming services including Spotify, Apple Music, and Amazon Music.",
  openGraph: {
    title: "Our Partners | NAIVEN DISTRIBUTION",
    description:
      "Delivering your catalog directly across major global streaming services including Spotify, Apple Music, and Amazon Music.",
    url: "https://naivendistribution.com/partners",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
