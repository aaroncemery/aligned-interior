import { BlogPostListQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { ArrowRight } from "lucide-react";

export default async function Blog() {
  const posts = await client.fetch(BlogPostListQuery);
  return (
    <div className="container mx-auto min-h-screen px-4">
      <header className="border-brand-interior-green grid grid-cols-1 items-center gap-4 border-t-[1px] border-b-[1px] py-6 lg:grid-cols-2">
        <div className="mb-0 max-w-[700px] gap-4 lg:pr-12">
          <h1 className="font-cormorant text-brand-wispful-black text-5xl lg:text-6xl">
            Blog
          </h1>
        </div>
      </header>
      <ul className="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const imageUrl =
            post.mainImage?.image &&
            urlForImage({ ...post.mainImage.image, _type: "imageObject" })
              ?.width(1200)
              .url();
          return (
            <li key={post.slug?.current}>
              <Link
                href={`${post.slug?.current}`}
                className="group border-brand-winter-morning hover:border-brand-winter-morning/50 shadow-card-shadow flex flex-col gap-4 rounded-md border p-4 transition-all duration-300"
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={post.title || ""}
                    width={1000}
                    height={1000}
                    className="w-full rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <h2 className="font-cormorant text-2xl">{post.title}</h2>
                <p className="group-hover:text-brand-burnt-red flex items-center gap-2 text-sm text-gray-500">
                  Read post <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
