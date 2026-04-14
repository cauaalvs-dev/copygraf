import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-mono",
  preload: false,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2d6b",
};

export const metadata: Metadata = {
  title: "Copygraf — Gráfica Digital & Papelaria em Caucaia, CE",
  description:
    "Gráfica rápida de verdade. Precisou pra hoje? Chama. Fachadas, banners, uniformes e papelaria em Caucaia, CE.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <link rel="preload" as="image" href="/hero-bg.webp" fetchPriority="high" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
