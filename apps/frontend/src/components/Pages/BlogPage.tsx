import type { BlogPostQueryResult } from "../../../sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { BlogPostSerializer } from "../builders/PortableTextSerializer";
import { PortableTextReactComponents } from "@portabletext/react";

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
      <header className="grid grid-cols-1 items-center gap-4 border-b-[1px] border-t-[1px] border-brand-interior-green py-6 lg:grid-cols-2">
        <div className="mb-0 max-w-[700px] gap-4 border-r-brand-interior-green lg:border-r-[1px] lg:pr-12">
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
          <h1 className="font-cormorant text-5xl text-brand-wispful-black lg:text-6xl">
            {title}
          </h1>
        </div>
      </header>
      <div className="container mx-auto h-screen max-w-5xl px-4 py-10">
        {content?.content && (
          <PortableText
            value={content.content as any[]}
            components={
              BlogPostSerializer as unknown as Partial<PortableTextReactComponents>
            }
          />
        )}
      </div>
    </div>
  );
}
