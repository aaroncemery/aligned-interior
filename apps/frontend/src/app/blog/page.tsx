import Hero, { type HeroProps } from "@/components/Hero/Hero";
import ContentBlock from "@/components/ContentBlock";
import { HomePageQuery } from "@/sanity/lib/queries";
import { HomePageQueryResult } from "../../../sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { VisualHeader } from "@/components/ui/VisualHeader";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import { AccordionSection } from "@/components/ui/Accordion/AccordionSection";
import ContactForm from "@/components/Forms/Contact";
import FormWrapper from "@/components/Forms/Wrapper";

export default async function Home() {
  const data = await sanityFetch<HomePageQueryResult>({ query: HomePageQuery });

  return (
    <>
      <h1 className="text-center text-4xl font-bold">Blog</h1>
      <FormWrapper id="contact" title="Contact">
        <ContactForm />
      </FormWrapper>
    </>
  );
}
