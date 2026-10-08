import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Roster",
  description:
    "Explore the curated roster of independent artists, musicians, and producers distributed by Naiven Distribution.",
  openGraph: {
    title: "Our Roster | NAIVEN DISTRIBUTION",
    description:
      "Explore the curated roster of independent artists, musicians, and producers distributed by Naiven Distribution.",
    url: "https://naivendistribution.com/artists",
  },
};

export default function ArtistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
