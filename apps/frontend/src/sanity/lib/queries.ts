// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";
import { TestimonialSectionFragment } from "../../components/testimonial/query";
import { HeroFragment } from "../../components/Hero/query";
import { ContentBlockFragment } from "../../components/ContentBlock/query";
import { AccordionFragment } from "../../components/ui/Accordion/query";

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
      _type == "accordionSection" => ${AccordionFragment},
    }
  }`,
);

export const PageQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
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
    }
  }
`);

export const SeoQuery = defineQuery(`
  *[_type == "settings"][0] {
    seo {
      _type,
      title,
      description,
      keywords,
      noIndex,
      noFollow
    },
    favicon {
      'svg': svg.asset->url,
      'png96': png96.asset->url,
      'ico': ico.asset->url,
      'appleTouchIcon': appleTouchIcon.asset->url
    }
  }
`);
