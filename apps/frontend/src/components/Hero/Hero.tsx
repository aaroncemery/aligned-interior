"use client";

import { urlForImage } from "@/sanity/lib/utils";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { Button } from "../ui";
import { handleScrollToSection } from "@/lib/utils";
export type HeroProps = {
  _type: string;
  _key: string;
  backgroundImage?: SanityImageObject;
  title?: string;
  subtitle?: string;
};

const HeroComponent = ({ backgroundImage, title, subtitle }: HeroProps) => {
  const imageUrl = backgroundImage
    ? urlForImage(backgroundImage)?.width(1920).quality(80).url()
    : "";

  return (
    <>
      <div
        className="relative flex min-h-[50vh] flex-col items-center justify-center bg-cover bg-center py-32 before:absolute before:inset-0 before:bg-black/20"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="relative max-w-4xl text-center text-white">
          <h1 className="font-cinzel mb-4 text-4xl tracking-widest md:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="font-belle-aurore text-xl md:text-2xl">{subtitle}</p>
          )}
        </div>
        <div className="mt-8">
          <Button
            intent="primary"
            withArrow
            onClick={() => handleScrollToSection("services")}
          >
            Learn more
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
