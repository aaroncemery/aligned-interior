import { sanityFetch } from "@/sanity/lib/live";
import { BlogPostQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import BlogPage from "@/components/Pages/BlogPage";
import { BlogPostQueryResult } from "../../../../sanity.types";
import { Suspense } from "react";
import BlogPageSkeleton from "@/components/Pages/BlogPageSkeleton";
import { SanityLive } from "@/sanity/lib/live";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = `blog/${(await params).slug}`;
  const result = await sanityFetch({
    query: BlogPostQuery,
    params: { slug: slug },
  });

  if (!result?.data) {
    notFound();
  }

  return (
    <Suspense fallback={<BlogPageSkeleton />}>
      <BlogPage data={result.data} />
      <SanityLive />
    </Suspense>
  );
}
