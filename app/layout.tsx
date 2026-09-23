import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doctortamil.vercel.app"),
  title:
    "Script Doctor Tamil Kill the Cat - Gen Z Screenwriting E-Book (Tamil & English)",
  description:
    "Learn detailed film story development, screenplay writing, short film scripting, YouTube hooks, and Instagram Reels scripting in Tamil and English.",
  keywords: [
    "Script Doctor Tamil",
    "Tamil Screenplay Guide",
    "Tamil Screenplay Book",
    "Screenplay Structure",
    "Screenwriting Tamil",
    "Script Writing",
    "Story Structure",
    "Script Discussion",
    "Script Analysis",
    "Tamil Cinema",
    "Tamil Film Writing",
    "Tamil Movie Analysis",
    "Save the Cat Tamil",
    "Save the Cat Beat Sheet",
    "Three Act Structure",
    "Story Beats",
    "Screenplay Beats",
    "Film Script Writing",
    "Short Film Script",
    "Short Film Writing",
    "Aspiring Filmmakers",
    "Aspiring Directors",
    "Aspiring Screenwriters",
    "Tamil Filmmakers",
    "Film Students",
    "Kill the Cat Ebook",
    "Gen Z Thiraikathai",
    "Film Scripting PDF",
  ],
  openGraph: {
    title: "Script Doctor Tamil | Kill the Cat - Gen Z Screenwriting E-Book",
    description:
      "Learn detailed film story development, screenplay writing, short film scripting, YouTube hooks, and Instagram Reels scripting in Tamil and English.",
    url: "https://scriptdoctortamil.vercel.app",
    siteName: "Script Doctor Tamil",
    images: [
      {
        url: "/images/image.jpeg",
        width: 1200,
        height: 630,
        alt: "Script Doctor Tamil - Kill the Cat E-Book",
      },
    ],
    locale: "ta_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Script Doctor Tamil | Kill the Cat - Gen Z Screenwriting E-Book",
    description:
      "Learn detailed film story development, screenplay writing, short film scripting, YouTube hooks, and Instagram Reels scripting in Tamil and English.",
    images: ["/images/image.jpeg"],
  },
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/images/logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpeg" />
      </head>
      <body className="min-h-screen font-sans antialiased selection:bg-amber-500 selection:text-black transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
