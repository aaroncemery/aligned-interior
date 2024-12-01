import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { PortableText } from "@portabletext/react";
import { SanityImageMetadata } from "../../sanity.types";
import { PortableTextSerializer } from "./builders/PortableTextSerializer";
import { FeatureSection } from "../../sanity.types";

export type ContentBlockProps = FeatureSection & {
  _key: string;
  metadata?: SanityImageMetadata;
};

const ContentBlock = ({ description, image, metadata }: ContentBlockProps) => {
  const imageUrl =
    image && image?.image
      ? urlForImage({ ...image?.image, _type: "imageObject" })?.url()
      : "";
  return (
    <div
      className={`items-top container relative mx-auto flex justify-center px-4 py-10 lg:py-28 ${image && "gap-x-9"}`}
    >
      {image && imageUrl && (
        <Image
          className="rounded-md"
          src={imageUrl}
          alt={image?.image?.alt || ""}
          width={metadata?.dimensions?.width}
          height={metadata?.dimensions?.height}
        />
      )}
      {description && (
        <div className={`mx-auto w-full max-w-7xl text-left`}>
          <PortableText
            value={description}
            components={PortableTextSerializer}
          />
        </div>
      )}
    </div>
  );
};

export default ContentBlock;
