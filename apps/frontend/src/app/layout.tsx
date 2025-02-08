import { Cinzel, La_Belle_Aurore, Inter, Cormorant } from "next/font/google";
import "./globals.css";
import { SeoQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/ui/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { SanityLive } from "@/sanity/lib/live";

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
  const settings = await sanityFetch({ query: SeoQuery });
  return {
    title: settings?.data?.seo?.title,
    description: settings?.data?.seo?.description,
    keywords: settings?.data?.seo?.keywords,
    noIndex: settings?.data?.seo?.noIndex,
    noFollow: settings?.data?.seo?.noFollow,
    openGraph: {
      title: settings?.data?.seo?.title,
      description: settings?.data?.seo?.description,
    },
    icons: {
      icon: [
        {
          url: settings?.data?.favicon?.svg || "/favicon/favicon.svg",
          type: "image/svg+xml",
        },
        {
          url: settings?.data?.favicon?.png96 || "/favicon/favicon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
      ],
      shortcut: { url: settings?.data?.favicon?.ico },
      apple: {
        url:
          settings?.data?.favicon?.appleTouchIcon ||
          "/favicon/apple-touch-icon.png",
      },
    },
  };
}

export default async function RootLayout({
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
        <div aria-hidden="true" className="decorative-element"></div>
        <main role="main">
          {children}
          <SanityLive />
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}
        </main>
      </body>
    </html>
  );
}
