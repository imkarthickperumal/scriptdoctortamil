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
  title: "Script Doctor Tamil Kill the Cat - Gen Z Screenwriting E-Book (Tamil & English)",
  description: "Learn detailed film story development, screenplay writing, short film scripting, YouTube hooks, and Instagram Reels scripting in Tamil and English.",
  keywords: ["Kill the Cat Ebook", "Script Doctor Tamil", "Screenwriting Tamil", "Gen Z Thiraikathai", "Film Scripting PDF", "Tamil Cinema Screenplay"],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className="min-h-screen font-sans antialiased selection:bg-amber-500 selection:text-black transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
