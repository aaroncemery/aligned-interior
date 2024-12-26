// ./src/components/testimonial/query.ts

import { defineQuery } from "next-sanity";

// Fragment for individual testimonial. Update this to update the testimonial card queries.
export const TestimonialFragment = `{
  _type,
  _key,
  title,
  testimonial,
  author,
  location,
  image,
}`;

// Fragment for testimonial section. Update this to update the testimonial section queries.
export const TestimonialSectionFragment = `{
  _type,
  _key,
  _id,
  title,
  testimonials[] -> ${TestimonialFragment},
}`;

export const TestimonialQuery = defineQuery(
  `*[_type == "testimonial"] {
    ${TestimonialFragment}
  }`,
);

export const TestimonialSectionQuery = defineQuery(
  `*[_type == "testimonialSection"] {
    ${TestimonialSectionFragment}
  }`,
);
