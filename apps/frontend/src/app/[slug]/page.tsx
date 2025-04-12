import { PageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { renderPageBuilder } from "@/lib/pageBuilder";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }: PageProps) {
  try {
    const resolvedParams = await params;
    const result = await sanityFetch({
      query: PageQuery,
      params: { slug: resolvedParams.slug },
    });

    if (!result?.data?.pageBuilder) {
      return <div>No content found</div>;
    }

    return <>{renderPageBuilder(result.data.pageBuilder)}</>;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return <div>Error loading page content</div>;
  }
}
