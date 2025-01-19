import Hero, { type HeroProps } from "@/components/Hero/Hero";
import ContentBlock from "@/components/ContentBlock";
import { VisualHeader } from "@/components/ui/VisualHeader";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import { AccordionSection } from "@/components/ui/Accordion/AccordionSection";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import FormWrapper from "../Forms/Wrapper";
import ContactForm from "../Forms/Contact";

interface PageBuilderProps {
  pageBuilder: any[];
  showContactForm?: boolean;
}

export default function PageBuilder({
  pageBuilder,
  showContactForm = false,
}: PageBuilderProps) {
  return (
    <>
      {pageBuilder?.map((block: any) => {
        switch (block._type) {
          case "hero":
            const heroProps: HeroProps = {
              ...block,
              backgroundImage: block.backgroundImage as SanityImageObject,
            };
            return <Hero key={block._key} {...heroProps} />;
          case "featureSection":
            return <ContentBlock key={block._key} {...block} />;
          case "visualHeader":
            return <VisualHeader key={block._key} {...block} />;
          case "testimonialSection":
            return <TestimonialSection key={block._key} {...block} />;
          case "accordionSection":
            return <AccordionSection key={block._key} {...block} />;
          default:
            return null;
        }
      })}
      {showContactForm && (
        <FormWrapper id="contact" title="Contact">
          <ContactForm />
        </FormWrapper>
      )}
    </>
  );
}
