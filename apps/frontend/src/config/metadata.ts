import { SeoQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { SeoQueryResult } from "../../sanity.types";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = (await sanityFetch({
    query: SeoQuery,
  })) as { data: SeoQueryResult };

  return {
    title: settings?.seo?.title || undefined,
    description: settings?.seo?.description || undefined,
    keywords: settings?.seo?.keywords || undefined,
    noIndex: settings?.seo?.noIndex || undefined,
    noFollow: settings?.seo?.noFollow || undefined,
    openGraph: {
      title: settings?.seo?.title || undefined,
      description: settings?.seo?.description || undefined,
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
      shortcut: settings?.favicon?.ico || undefined,
      apple: {
        url:
          settings?.favicon?.appleTouchIcon || "/favicon/apple-touch-icon.png",
      },
    },
  };
}
