// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";
import { TestimonialSectionFragment } from "@/components/testimonial/query";
import { HeroFragment } from "@/components/Hero/query";
import { ContentBlockFragment } from "@/components/ContentBlock";

export const HomePageQuery = defineQuery(
  `*[_type == "home"][0] {
    "seo": seo,
    "pageBuilder": pageBuilder[] {
      _type == "hero" => ${HeroFragment},
      _type == "featureSection" => ${ContentBlockFragment},
      _type == "visualHeader" => {
        _type,
        _key,
        headline,
        image,
        "metadata": image.image.asset->metadata,
      },
      _type == "testimonialSection" => ${TestimonialSectionFragment},
    },
  }`,
);
