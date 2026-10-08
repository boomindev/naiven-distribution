import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct submission channel for independent artists seeking boutique digital music distribution with Naiven Distribution.",
  openGraph: {
    title: "Contact | NAIVEN DISTRIBUTION",
    description:
      "Direct submission channel for independent artists seeking boutique digital music distribution with Naiven Distribution.",
    url: "https://naivendistribution.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
