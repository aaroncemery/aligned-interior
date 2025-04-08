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

export const PageQuery = defineQuery(
  `*[_type == "page" && slug.current == $slug][0] {
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

export const BlogPostQuery = defineQuery(`
  *[_type == "blogPage" && slug.current == $slug][0] {
    title,
    slug,
    mainImage,
    author,
    content,
    publishedAt
  }
`);

export const BlogPostListQuery = defineQuery(`
  *[_type == "blogPage"] {
    title,
    slug,
    mainImage
  }
`);

export const NavigationQuery = defineQuery(`
  *[_type == "navigation"] {
    "items": items[] {
      _type == "reference" => @-> {
        _type == "home" => {
          "label": "Home",
          "url": "/"
        },
        _type == "page" => {
          "label": title,
          "url": slug.current
        }
      },
      _type != "reference" => {
        "label": label,
        "url": url
      }
    }
  }
`);
