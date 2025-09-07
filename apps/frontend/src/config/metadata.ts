import { SeoQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { SeoQueryResult } from "../../sanity.types";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch<SeoQueryResult>({
    query: SeoQuery,
  });

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
