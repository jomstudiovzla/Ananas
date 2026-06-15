import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../shared/styles/mobile-fluid-core.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoneSelector from "@/components/ZoneSelector";
import CatalogInitializer from "@/components/CatalogInitializer";
import FirebaseSync from "@/components/FirebaseSync";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Ananas Frutería | Supermercado Online",
  description: "Frutas, verduras y víveres frescos directo a tu puerta. Delivery en Caracas con calidad garantizada. Pago seguro vía Zelle, Pago Móvil o Efectivo.",
  keywords: ["supermercado online", "frutería caracas", "delivery de frutas", "viveres delivery", "compras online venezuela", "ananas"],
  openGraph: {
    title: "Ananas Frutería | Frescura hasta tu puerta",
    description: "Tu supermercado online de confianza en Caracas. Frutas, vegetales, víveres y más. ¡Haz tu pedido fácil y rápido!",
    url: "https://jomstudiovzla.github.io/Ananas/",
    siteName: "Ananas Frutería",
    images: [
      {
        url: "https://raw.githubusercontent.com/jomstudiovzla/Ananas/main/frontend/public/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ananas Frutería Caracas",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananas Frutería",
    description: "Frescura garantizada hasta la puerta de tu casa. Delivery rápido y seguro en Caracas.",
  },
  robots: "index, follow",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <FirebaseSync />
        <CatalogInitializer />
        <ZoneSelector />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
