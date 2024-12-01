// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const HomePageQuery = defineQuery(
  `*[_type == "home"][0] {
    "seo": seo,
    "pageBuilder": pageBuilder[] {
      _type == "hero" => {
        _type,
        _key,
        title,
        subtitle,
        backgroundImage,
        cta[] {
          ...,
        }
      },
      _type == "featureSection" => {
        _type,
        _key,
        title,
        description,
        image {
          image,
          alt,
        },
        "metadata": image.image.asset->metadata,
      },
      _type == "visualHeader" => {
        _type,
        _key,
        headline,
        image,
        "metadata": image.image.asset->metadata,
      },
    },
  }`,
);
