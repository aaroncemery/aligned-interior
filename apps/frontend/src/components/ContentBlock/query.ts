export const ContentBlockFragment = `{
  _type,
  _key,
  title,
  description,
  image {
    image {
      asset,
      crop,
      hotspot
    },
    alt,
  },
  "metadata": image.image.asset->metadata,
}`;
