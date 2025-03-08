import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { PortableText } from "@portabletext/react";
import { SanityImageMetadata, FeatureSection } from "../../../sanity.types";
import { PortableTextSerializer } from "../builders/PortableTextSerializer";
import { cn } from "@/lib/utils";

export type ContentBlockProps = FeatureSection & {
  _key: string;
  metadata?: SanityImageMetadata;
};

const ContentBlock = ({ description, image, metadata }: ContentBlockProps) => {
  const imageUrl =
    image && image?.image
      ? urlForImage({ ...image?.image, _type: "imageObject" })
          ?.width(1200)
          .url()
      : "";

  return (
    <div
      className={`items-top bg-brand-winter-morning relative mx-auto flex justify-center px-4 py-10 lg:py-20 ${image && "gap-x-9"}`}
    >
      <div
        className={cn(
          "container",
          image &&
            "grid grid-cols-1 items-center justify-center gap-5 gap-x-6 md:grid-cols-2 md:gap-x-10",
        )}
      >
        {image && imageUrl && (
          <Image
            className="max-h-[400px] rounded-md object-cover object-left-top"
            src={imageUrl}
            alt={image?.image?.alt || ""}
            width={metadata?.dimensions?.width}
            height={metadata?.dimensions?.height}
          />
        )}
        {description && (
          <div
            className={`w-full ${
              image && imageUrl
                ? "text-left lg:max-w-lg"
                : "mx-auto max-w-7xl text-center"
            }`}
          >
            <PortableText
              value={description}
              components={PortableTextSerializer}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentBlock;
