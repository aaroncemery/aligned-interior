import { Cinzel, La_Belle_Aurore, Inter, Cormorant } from "next/font/google";
import "./globals.css";
import { SeoQuery, NavigationQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SeoQueryResult } from "../../sanity.types";
import Script from "next/script";
import Analytics from "@/components/tracking/Analytics";
import { NavigationProvider } from "@/components/ui/nav/NavigationProvider";

interface NavigationData {
  data: Array<{
    items: Array<{
      label: string;
      href: string;
    }>;
  }>;
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

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
  const settings = await sanityFetch<SeoQueryResult>({ query: SeoQuery });
  return {
    title: settings?.seo?.title,
    description: settings?.seo?.description,
    keywords: settings?.seo?.keywords,
    noIndex: settings?.seo?.noIndex,
    noFollow: settings?.seo?.noFollow,
    openGraph: {
      title: settings?.seo?.title,
      description: settings?.seo?.description,
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationData = await sanityFetch<NavigationData>({
    query: NavigationQuery,
  });

  console.log("navigationData", navigationData);

  const navItems =
    navigationData?.data?.[0]?.items?.map((item) => ({
      label: item.label,
      href: item.href,
      isSection: item.href.startsWith("#"),
    })) || [];

  console.log("navItems", navItems);

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {GA_TRACKING_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
        )}
        {GA_TRACKING_ID && (
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        )}
        <Analytics />
      </head>
      <body
        className={`${belleAurore.variable} ${cinzel.variable} ${cormorant.variable} ${inter.variable} antialiased`}
      >
        <NavigationProvider items={navItems}>{children}</NavigationProvider>
      </body>
    </html>
  );
}
