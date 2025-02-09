import type { BlogPostQueryResult } from "../../../sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
export default function BlogPage({
  data,
}: {
  data: NonNullable<BlogPostQueryResult>;
}) {
  const { title = "Add a title", slug, mainImage } = data;
  console.log(mainImage);
  const imageUrl =
    mainImage && mainImage?.image
      ? urlForImage({ ...mainImage?.image, _type: "imageObject" })
          ?.width(1200)
          .url()
      : "";
  return (
    <div>
      <div>{title}</div>
      <div>{slug?.current}</div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={mainImage?.image?.alt || ""}
          width={1200}
          height={1200}
        />
      )}
    </div>
  );
}
