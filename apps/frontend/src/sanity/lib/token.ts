import "server-only";

export const token = process.env.SANITY_API_READ_TOKEN;

if (process.env.NODE_ENV === "development" && !token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}
