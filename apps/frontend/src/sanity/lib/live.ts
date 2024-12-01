// ./src/sanity/lib/live.ts

import { createClient, defineLive } from "next-sanity";
import { token } from "./token";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "vX",
  useCdn: true,
  stega: { studioUrl: "localhost:3333" },
});

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
