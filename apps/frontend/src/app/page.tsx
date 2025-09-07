import { HomePageQuery } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { renderPageBuilder } from "@/lib/pageBuilder";

export default async function Home() {
  try {
    const result = await sanityFetch({
      query: HomePageQuery,
    });

    if (!result?.data?.pageBuilder) {
      return <div>No content found</div>;
    }

    return (
      <>
        {renderPageBuilder(result.data.pageBuilder)}
        <SanityLive />
      </>
    );
  } catch (error) {
    console.error("Error fetching page data:", error);
    return <div>Error loading page content</div>;
  }
}
