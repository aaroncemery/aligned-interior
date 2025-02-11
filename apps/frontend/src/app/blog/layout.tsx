import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/Footer";
import { SeoQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SeoQueryResult } from "../../../sanity.types";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation.Desktop isStatic={true} />
      {children}
      <Footer />
    </>
  );
}
