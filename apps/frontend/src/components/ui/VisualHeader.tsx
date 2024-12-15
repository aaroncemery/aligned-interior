import {
  VisualHeader as VisualHeaderType,
  SanityImageMetadata,
} from "../../../sanity.types";
import {
  PortableText,
  PortableTextComponentProps,
  PortableTextBlock,
} from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/utils";

export type VisualHeaderProps = VisualHeaderType & {
  metadata?: SanityImageMetadata;
};

type FontStyleProps = {
  fontFamily: string;
};

const ptComponents = {
  block: {
    normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <p className="font-sans font-extralight tracking-widest">{children}</p>
    ),
    h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h1 className="text-4xl font-bold">{children}</h1>
    ),
  },
  marks: {
    fontStyle: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: FontStyleProps;
    }) => {
      const { fontFamily } = value || {};
      return (
        <span
          className={`font-${fontFamily} ${fontFamily === "belleAurore" ? "text-7xl" : "text-6xl"}`}
        >
          {children}
        </span>
      );
    },
  },
};

export const VisualHeader = ({ headline, image }: VisualHeaderProps) => {
  const imageUrl =
    image && image?.image
      ? urlForImage({ ...image?.image, _type: "imageObject" })?.url()
      : "";
  return (
    <div
      className="mx-auto flex justify-center bg-cover bg-center px-4 py-10 lg:py-28"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1 className="max-w-4xl font-cinzel text-4xl text-brand-winter-morning lg:text-6xl">
        {headline && (
          <PortableText value={headline} components={ptComponents} />
        )}
      </h1>
    </div>
  );
};
