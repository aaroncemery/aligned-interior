"use client";

import Accordion from "./Accordian";
import {
  AccordionSection as AccordionSectionType,
  SanityImageMetadata,
} from "../../../../sanity.types";
import { Button } from "../Button";
import { urlForImage } from "@/sanity/lib/utils";
import { handleScrollToSection } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { PortableTextSerializer } from "@/components/builders/PortableTextSerializer";

type AccordionSectionProps = AccordionSectionType & {
  metadata?: SanityImageMetadata;
};

export const AccordionSection = ({
  title,
  subtitle,
  image,
  items,
}: AccordionSectionProps) => {
  const imageUrl =
    image && image?.image
      ? urlForImage({ ...image?.image, _type: "imageObject" })
          ?.fit("crop")
          .auto("format")
          .url()
      : "";

  console.log("Full props:", { title, subtitle, image, items });
  console.log("subtitle type:", typeof subtitle);

  return (
    <div
      id="services"
      className={`bg-brand-winter-morning mx-auto bg-cover bg-center py-10 ${
        imageUrl ? "bg-no-repeat" : ""
      }`}
      style={{
        backgroundImage: imageUrl
          ? `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5)),url(${imageUrl})`
          : "none",
      }}
    >
      <h2 className="font-cinzel pb-4 text-center text-4xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <PortableText value={subtitle} components={PortableTextSerializer} />
        </div>
      )}
      <div className="container mx-auto max-w-3xl px-4">
        <div className="flex flex-col items-center gap-4">
          {items && <Accordion items={items} />}
          <Button withArrow onClick={() => handleScrollToSection("contact")}>
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};
