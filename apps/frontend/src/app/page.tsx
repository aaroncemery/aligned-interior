import Hero, { type HeroProps } from "@/components/Hero/Hero";
import ContentBlock from "@/components/ContentBlock";
import { HomePageQuery } from "@/sanity/lib/queries";
import { HomePageQueryResult } from "../../sanity.types";
import { sanityFetch } from "@/sanity/lib/live";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { VisualHeader } from "@/components/ui/VisualHeader";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import { AccordionSection } from "@/components/ui/Accordion/AccordionSection";
import ContactForm from "@/components/Forms/Contact";
import FormWrapper from "@/components/Forms/Wrapper";
import { Footer } from "@/components/ui/Footer";
import { Navigation } from "@/components/ui/nav";

export default async function Home() {
  const data = await sanityFetch({ query: HomePageQuery });

  return (
    <>
      <Navigation.Desktop />
      {data?.data?.pageBuilder?.map((block: any) => {
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
        if (block._type === "accordionSection") {
          return <AccordionSection key={block._key} {...block} />;
        }
      })}
      <FormWrapper id="contact" title="Contact">
        <ContactForm />
      </FormWrapper>
      <Footer />
    </>
  );
}
