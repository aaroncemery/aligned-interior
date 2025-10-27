export const HeroFragment = `{
  _type,
  _key,
  title,
  subtitle,
  backgroundImage {
    asset,
    crop,
    hotspot,
    alt
  },
  cta[] {
    ...,
  }
}`;
