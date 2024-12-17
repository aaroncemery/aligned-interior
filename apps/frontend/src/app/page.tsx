import Hero from "@/components/Hero";
import ContentBlock from "@/components/ContentBlock";
import { HomePageQuery } from "@/sanity/lib/queries";
import { HomePageQueryResult } from "../../sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { HeroProps } from "@/components/Hero";
import { VisualHeader } from "@/components/ui/VisualHeader";
import TestimonialBlock from "@/components/testimonial/TestimonialBlock";
export default async function Home() {
  const data = await sanityFetch<HomePageQueryResult>({ query: HomePageQuery });
  return (
    <>
      {data?.pageBuilder?.map((block: any) => {
        if (block._type === "hero") {
          const heroProps: HeroProps = {
            ...block,
            backgroundImage: block.backgroundImage as SanityImageObject,
          };
          return <Hero key={block._key} {...heroProps} />;
        }
        if (block._type === "featureSection") {
          return <ContentBlock key={block._key} {...block} />;
        }
        if (block._type === "visualHeader") {
          return <VisualHeader key={block._key} {...block} />;
        }
      })}
      <TestimonialBlock />
    </>
  );
}
