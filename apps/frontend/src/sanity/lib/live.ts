// ./src/sanity/lib/live.ts

import { defineLive } from "next-sanity";
import { token } from "./token";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
