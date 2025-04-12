import { PageBuilder } from "../../sanity.types";
import { BlockComponent } from "./types";
import Hero from "@/components/Hero/Hero";
import ContentBlock from "@/components/ContentBlock";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { VisualHeader } from "@/components/ui/VisualHeader";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import { AccordionSection } from "@/components/ui/Accordion/AccordionSection";

type PageBuilderBlock = NonNullable<PageBuilder>[number];

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

export function renderPageBuilder(blocks: unknown): React.ReactNode {
  return (blocks as PageBuilder).map((block: PageBuilderBlock) => {
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
      : {
          ...block,
          ...("title" in block ? { title: block.title ?? undefined } : {}),
        };

    return <Component key={block._key} {...props} />;
  });
}
