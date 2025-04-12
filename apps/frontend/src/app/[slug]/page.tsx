import { PageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { renderPageBuilder } from "@/lib/pageBuilder";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params }: PageProps) {
  try {
    const result = await sanityFetch({
      query: PageQuery,
      params: { slug: params.slug },
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
