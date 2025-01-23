import { sanityFetch } from "@/sanity/lib/fetch";
import { PageQuery, PageSlugsQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import PageLayout from "../../components/ui/PageLayout";
import PageBuilder from "@/components/builders/PageBuilder";

// Fix the generateStaticParams function
export async function generateStaticParams() {
  const slugs = await sanityFetch<Array<{ slug: { current: string } }>>({
    query: PageSlugsQuery,
  });

  // Add any additional static paths you want to pre-render
  const staticPaths = ["about", "contact"];

  return [
    ...slugs.map((page) => ({
      slug: page.slug.current,
    })),
    ...staticPaths.map((path) => ({
      slug: path,
    })),
  ];
}

// Change this to false to handle all routes
export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  try {
    const data = await sanityFetch<any>({ query: PageQuery, params: { slug } });

    // Check if data exists at all
    if (!data) {
      notFound();
    }

    // Check if pageBuilder exists and has content
    if (!data.pageBuilder || data.pageBuilder.length === 0) {
      notFound();
    }

    return (
      <PageLayout>
        {data?.pageBuilder && (
          <PageBuilder pageBuilder={data?.pageBuilder} showContactForm={true} />
        )}
      </PageLayout>
    );
  } catch (error) {
    // If there's an error fetching the data, show the 404 page
    notFound();
  }
}
