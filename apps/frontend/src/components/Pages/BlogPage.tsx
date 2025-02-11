import type { BlogPostQueryResult } from "../../../sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";

export default function BlogPage({
  data,
}: {
  data: NonNullable<BlogPostQueryResult>;
}) {
  const { title = "Add a title", mainImage, publishedAt, content } = data;
  const formattedDate = publishedAt ? formatDate(publishedAt) : "";
  const imageUrl =
    mainImage && mainImage?.image
      ? urlForImage({ ...mainImage?.image, _type: "imageObject" })
          ?.width(1200)
          .url()
      : "";

  return (
    <div className="container mx-auto px-4">
      <header className="flex flex-col items-center gap-4 lg:flex-row">
        <div className="mb-0 w-1/2 max-w-[700px] gap-4 border-r-[1px] border-r-brand-interior-green pr-12">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={mainImage?.image?.alt || ""}
              width={1200}
              height={1200}
            />
          )}
        </div>
        <div>
          <div className="font-belleAurore text-base text-brand-wispful-black md:text-lg">
            {formattedDate}
          </div>
          <h1 className="font-cormorant text-6xl text-brand-wispful-black">
            {title}
          </h1>
        </div>
      </header>
      <div className="container mx-auto h-screen px-4">
        {content?.content && <PortableText value={content.content as any[]} />}
      </div>
    </div>
  );
}
