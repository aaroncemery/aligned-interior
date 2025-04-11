import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/Footer";
import { SeoQuery, NavigationQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SeoQueryResult } from "../../../sanity.types";
import { NavigationProvider } from "@/components/ui/nav/NavigationProvider";

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
  };
}

interface NavigationData
  extends Array<{
    items: Array<{
      label: string;
      url: string;
    }>;
  }> {}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationData = await sanityFetch<NavigationData>({
    query: NavigationQuery,
  });

  const navItems =
    navigationData[0]?.items?.map((item) => ({
      label: item.label,
      href: item.url,
      isSection: item.url.startsWith("#"),
    })) || [];

  return (
    <>
      <NavigationProvider items={navItems}>{children}</NavigationProvider>
    </>
  );
}
