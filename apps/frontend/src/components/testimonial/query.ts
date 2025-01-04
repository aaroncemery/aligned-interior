// ./src/components/testimonial/query.ts

import { defineQuery } from "next-sanity";

// Fragment for individual testimonial
export const TestimonialFragment = `{
  _type,
  _key,
  _id,
  title,
  testimonial,
  author,
  location,
  image {
    image,
    caption
  }
}`;

// Fragment for testimonial section
export const TestimonialSectionFragment = `{
  _type,
  _key,
  _id,
  title,
  "testimonials": testimonials[]-> ${TestimonialFragment}
}`;

export const TestimonialQuery = defineQuery(
  `*[_type == "testimonial"] ${TestimonialFragment}`,
);

export const TestimonialSectionQuery = defineQuery(
  `*[_type == "testimonialSection"] ${TestimonialSectionFragment}`,
);
