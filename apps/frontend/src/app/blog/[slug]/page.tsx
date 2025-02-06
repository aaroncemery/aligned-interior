import { sanityFetch } from "@/sanity/lib/fetch";
import { BlogPostQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import BlogPage from "@/components/Pages/BlogPage";
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = `blog/${(await params).slug}`;
  const data = await sanityFetch<any>({
    query: BlogPostQuery,
    params: { slug: slug },
  });

  if (!data) {
    notFound();
  }

  return <BlogPage data={data} />;
}
