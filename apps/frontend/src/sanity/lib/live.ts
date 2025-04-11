// ./src/sanity/lib/live.ts

import { createClient, defineLive } from "next-sanity";
import { token } from "./token";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-25",
  useCdn: true,
  perspective: "published",
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "localhost:3333",
    enabled: process.env.NODE_ENV === "development",
  },
});

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
