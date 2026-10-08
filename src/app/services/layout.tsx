import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Direct digital distribution, artist profile verification, and focused release planning for independent artists.",
  openGraph: {
    title: "Our Services | NAIVEN DISTRIBUTION",
    description:
      "Direct digital distribution, artist profile verification, and focused release planning for independent artists.",
    url: "https://naivendistribution.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
