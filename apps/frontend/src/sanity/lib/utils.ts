import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/lib/api";
import { ImageObject } from "../../../sanity.types";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

type ImageObjectWithAsset = ImageObject & {
  asset?: {
    _ref: string;
  };
  alt?: string;
};

export const urlForImage = (
  source: ImageObjectWithAsset | SanityImageObject,
) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }

  return imageBuilder?.image(source).auto("format").fit("max");
};

export function resolveOpenGraphImage(
  image: ImageObjectWithAsset,
  width = 1200,
  height = 627,
) {
  if (!image) return;
  const url = urlForImage(image)?.width(1200).height(627).fit("crop").url();
  if (!url) return;
  return { url, alt: image?.alt as string, width, height };
}
