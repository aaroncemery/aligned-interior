"use client";

import Accordion from "./Accordian";
import {
  AccordionSection as AccordionSectionType,
  SanityImageMetadata,
} from "../../../../sanity.types";
import { Button } from "../Button";
import { urlForImage } from "@/sanity/lib/utils";
import { handleScrollToSection } from "@/lib/utils";

type AccordionSectionProps = AccordionSectionType & {
  metadata?: SanityImageMetadata;
};

export const AccordionSection = ({
  title,
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
  return (
    <div
      id="services"
      className={`mx-auto bg-brand-winter-morning bg-cover bg-center py-10 ${
        imageUrl ? "bg-no-repeat" : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5)),url(${imageUrl})`,
      }}
    >
      <h2 className="mb-10 text-center font-cinzel text-4xl lg:text-6xl">
        {title}
      </h2>
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
