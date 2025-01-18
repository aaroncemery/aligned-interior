import { Cinzel, La_Belle_Aurore, Inter, Cormorant } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/Footer";
import { SeoQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const belleAurore = La_Belle_Aurore({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-belle-aurore",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata() {
  const settings = await sanityFetch<any>({ query: SeoQuery });
  return {
    title: settings?.seo?.title,
    description: settings?.seo?.description,
    keywords: settings?.seo?.keywords,
    noIndex: settings?.seo?.noIndex,
    noFollow: settings?.seo?.noFollow,
    openGraph: {
      title: settings?.seo?.title,
      description: settings?.seo?.description,
      url: settings?.seo?.url || "",
      images: settings?.seo?.images || [],
    },
    icons: {
      icon: [
        {
          url: settings?.favicon?.svg || "/favicon/favicon.svg",
          type: "image/svg+xml",
        },
        {
          url: settings?.favicon?.png96 || "/favicon/favicon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
      ],
      shortcut: { url: settings?.favicon?.ico },
      apple: {
        url:
          settings?.favicon?.appleTouchIcon || "/favicon/apple-touch-icon.png",
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <body
        className={`${belleAurore.variable} ${cinzel.variable} ${cormorant.variable} ${inter.variable} antialiased`}
      >
        <Navigation.Desktop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
