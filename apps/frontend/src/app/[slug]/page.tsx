import ContentBlock from "@/components/ContentBlock";
import ContactForm from "@/components/Forms/Contact";
import FormWrapper from "@/components/Forms/Wrapper";
import Hero, { HeroProps } from "@/components/Hero";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import { AccordionSection } from "@/components/ui/Accordion/AccordionSection";
import { VisualHeader } from "@/components/ui/VisualHeader";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PageQuery } from "@/sanity/lib/queries";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { notFound } from "next/navigation";
import { PageQueryResult } from "../../../sanity.types";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = `${(await params).slug}`;
  const data = await sanityFetch<PageQueryResult>({
    query: PageQuery,
    params: { slug },
  });

  if (!data) {
    notFound();
  }

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
    </>
  );
}
