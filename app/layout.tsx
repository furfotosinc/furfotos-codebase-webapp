import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const description =
  "FurFotos photographs the dogs, cats, and other animals who run the house. Galleries, booking, and prints are coming soon.";

export const metadata: Metadata = {
  metadataBase: new URL("https://furfotos.com"),
  title: "FurFotos — Coming soon",
  description,
  applicationName: "FurFotos",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FurFotos — Coming soon",
    description,
    url: "https://furfotos.com",
    siteName: "FurFotos",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FurFotos — Coming soon",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
