import ContentBlock from "@/components/ContentBlock";
import { HomePageQuery } from "@/sanity/lib/queries";
import { HomePageQueryResult } from "../../../sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import Hero, { type HeroProps } from "@/components/Hero";
import { VisualHeader } from "@/components/ui/VisualHeader";
import TestimonialSection from "@/components/testimonial/TestimonialSection";

export default async function Home() {
  const data = await sanityFetch<HomePageQueryResult>({ query: HomePageQuery });
  return data?.pageBuilder?.map((block: any) => {
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
    if (block._type === "testimonialSection") {
      return <TestimonialSection key={block._key} {...block} />;
    }
  });
}
