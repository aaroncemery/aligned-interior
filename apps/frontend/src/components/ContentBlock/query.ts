export const ContentBlockFragment = `{
  _type,
  _key,
  title,
  description,
  image {
    image,
    alt,
  },
  "metadata": image.image.asset->metadata,
}`;
