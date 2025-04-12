import Hero, { type HeroProps } from "@/components/Hero/Hero";
import ContentBlock from "@/components/ContentBlock";
import { HomePageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { VisualHeader } from "@/components/ui/VisualHeader";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import { AccordionSection } from "@/components/ui/Accordion/AccordionSection";
import { HomePageQueryResult } from "../../sanity.types";

type PageBuilderBlock = NonNullable<
  NonNullable<HomePageQueryResult>["pageBuilder"]
>[number];

// Define a type for the block components
type BlockComponent = {
  type: string;
  component: React.ComponentType<any>;
  propsTransformer?: (block: PageBuilderBlock) => any;
};

// Map of block types to their components
const blockComponents: BlockComponent[] = [
  {
    type: "hero",
    component: Hero,
    propsTransformer: (block) => {
      if (block._type !== "hero") return block;
      return {
        ...block,
        backgroundImage: block.backgroundImage as SanityImageObject,
      };
    },
  },
  {
    type: "featureSection",
    component: ContentBlock,
  },
  {
    type: "visualHeader",
    component: VisualHeader,
  },
  {
    type: "testimonialSection",
    component: TestimonialSection,
  },
  {
    type: "accordionSection",
    component: AccordionSection,
  },
];

export default async function Home() {
  try {
    const result = await sanityFetch({
      query: HomePageQuery,
    });

    if (!result?.data?.pageBuilder) {
      return <div>No content found</div>;
    }

    return (
      <>
        {result.data.pageBuilder.map((block: PageBuilderBlock) => {
          const blockComponent = blockComponents.find(
            (bc) => bc.type === block._type,
          );

          if (!blockComponent) {
            console.warn(`No component found for block type: ${block._type}`);
            return null;
          }

          const Component = blockComponent.component;
          const props = blockComponent.propsTransformer
            ? blockComponent.propsTransformer(block)
            : block;

          return <Component key={block._key} {...props} />;
        })}
      </>
    );
  } catch (error) {
    console.error("Error fetching page data:", error);
    return <div>Error loading page content</div>;
  }
}
