import { HomePageQuery, SeoQuery } from "@/sanity/lib/queries";
import { HomePageQueryResult, SeoQueryResult } from "../../sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Metadata } from "next";

import PageLayout from "../components/ui/PageLayout";
import PageBuilder from "@/components/builders/PageBuilder";

export default async function Home() {
  const data = await sanityFetch<HomePageQueryResult>({ query: HomePageQuery });
  const seo = await sanityFetch<SeoQueryResult>({ query: SeoQuery });

  const metadata: Metadata = {
    title: seo?.seo?.title || "Aligned Interior",
    description: seo?.seo?.description || "Aligned Interior",
  };

  return (
    <PageLayout>
      {data?.pageBuilder && (
        <PageBuilder pageBuilder={data?.pageBuilder} showContactForm={true} />
      )}
    </PageLayout>
  );
}
