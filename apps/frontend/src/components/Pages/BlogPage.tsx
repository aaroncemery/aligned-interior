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
  const imageUrl = mainImage?.image
    ? urlForImage({ ...mainImage.image, _type: "imageObject" })
        ?.width(1200)
        .url()
    : "";
  const blurDataUrl = mainImage?.metadata?.lqip || "";

  return (
    <div className="container mx-auto bg-white px-4">
      <header className="border-brand-interior-green grid grid-cols-1 items-center gap-4 border-t-[1px] border-b-[1px] py-6 lg:grid-cols-2">
        <div className="border-r-brand-interior-green mb-0 max-w-[700px] gap-4 lg:border-r-[1px] lg:pr-12">
          {imageUrl && (
            <div className="aspect-square w-full overflow-hidden">
              <Image
                src={imageUrl}
                alt={mainImage?.alt || ""}
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                priority
              />
            </div>
          )}
        </div>
        <div>
          <div className="font-belle-aurore text-brand-wispful-black text-base md:text-lg">
            {formattedDate}
          </div>
          <h1 className="font-cormorant text-brand-wispful-black text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </header>
      <div className="container mx-auto max-w-5xl px-4 py-10">
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
