import { urlForImage } from "@/sanity/lib/utils";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { Button } from "../ui";

export type HeroProps = {
  _type: string;
  _key: string;
  backgroundImage?: SanityImageObject;
  title?: string;
  subtitle?: string;
};

const HeroComponent = ({ backgroundImage, title, subtitle }: HeroProps) => {
  const imageUrl = backgroundImage ? urlForImage(backgroundImage) : "";
  return (
    <>
      <div
        className="relative flex min-h-[50vh] flex-col items-center justify-center bg-cover bg-center py-32 before:absolute before:inset-0 before:bg-black/20"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="relative z-10 max-w-3xl text-center text-white">
          <h1 className="mb-4 font-cinzel text-4xl tracking-widest md:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="font-belleAurore text-xl md:text-2xl">{subtitle}</p>
          )}
        </div>
        <div className="mt-8">
          <Button intent="primary" withArrow href="#">
            Learn more
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
