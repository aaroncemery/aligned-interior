import { sanityFetch } from "@/sanity/lib/fetch";
import { BlogPostQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = `blog/${(await params).slug}`;
  const data = await sanityFetch<any>({
    query: BlogPostQuery,
    params: { slug: "blog/test-blog" },
  });

  if (!data) {
    notFound();
  }

  console.log("slug", slug);
  console.log("data", data);

  return <div>{data.title}</div>;
}
