/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type BlogPage = {
  _id: string;
  _type: "blogPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  mainImage?: ImageObject;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  content?: BlogContent;
  publishedAt?: string;
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  image?: ImageObject;
  bio?: string;
  slug?: Slug;
  socialLinks?: Array<
    {
      _key: string;
    } & SocialLink
  >;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  parent?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "categoryParent";
  };
};

export type CategoryParent = {
  _id: string;
  _type: "categoryParent";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo?: Seo;
  favicon?: Favicon;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Favicon = {
  _type: "favicon";
  svg?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  png96?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  ico?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  appleTouchIcon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type AccordionSection = {
  _type: "accordionSection";
  title?: string;
  image?: ImageObject;
  items?: Array<
    {
      _key: string;
    } & AccordionItem
  >;
};

export type AccordionItem = {
  _type: "accordionItem";
  title?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      link?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type TestimonialSection = {
  _type: "testimonialSection";
  title?: string;
  testimonials?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "testimonial";
  }>;
};

export type Testimonial = {
  _id: string;
  _type: "testimonial";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  testimonial?: string;
  author?: string;
  location?: string;
  image?: ImageObject;
};

export type UrlDefault = string;

export type RichBlockHeadline = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal";
  listItem?: never;
  markDefs?: Array<
    {
      _key: string;
    } & FontStyle
  >;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type RichBlockDefault = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: null;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type SocialLink = {
  _type: "socialLink";
  url?: string;
  socialPlatform?: "facebook" | "instagram" | "linkedin";
};

export type BlogContent = {
  _type: "blogContent";
  content?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "normal" | "h2" | "h3" | "h4" | "h5" | "h6";
        listItem?: never;
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }
    | ({
        _key: string;
      } & ImageObject)
  >;
};

export type PageBuilder = Array<
  | ({
      _key: string;
    } & Hero)
  | ({
      _key: string;
    } & FeatureSection)
  | ({
      _key: string;
    } & VisualHeader)
  | ({
      _key: string;
    } & TestimonialSection)
  | ({
      _key: string;
    } & AccordionSection)
>;

export type VisualHeader = {
  _type: "visualHeader";
  internalTitle?: string;
  headline?: RichBlockHeadline;
  image?: ImageObject;
  showCta?: boolean;
  cta?: Cta;
};

export type FeatureSection = {
  _type: "featureSection";
  title?: string;
  internalDescription?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "h2" | "normal";
    listItem?: never;
    markDefs?: Array<
      | {
          reference?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "page";
          };
          _key: string;
        }
      | {
          url?: string;
          _key: string;
        }
    >;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  image?: ImageObject;
};

export type ImageObject = {
  _type: "imageObject";
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  caption?: string;
};

export type Cta = {
  _type: "cta";
  title?: string;
  url?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
};

export type Hero = {
  _type: "hero";
  title?: string;
  subtitle?: string;
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type FontStyle = {
  _type: "fontStyle";
  fontFamily?: "cinzel" | "belle-aurore";
};

export type Home = {
  _id: string;
  _type: "home";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  pageBuilder?: PageBuilder;
  seo?: Seo;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  seo?: Seo;
  pageBuilder?: PageBuilder;
};

export type Seo = {
  _type: "seo";
  title?: string;
  description?: string;
  ogImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  keywords?: Array<string>;
  noIndex?: boolean;
  noFollow?: boolean;
  robots?: string;
  canonicalUrl?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type SanityAssistInstructionTask = {
  _type: "sanity.assist.instructionTask";
  path?: string;
  instructionKey?: string;
  started?: string;
  updated?: string;
  info?: string;
};

export type SanityAssistTaskStatus = {
  _type: "sanity.assist.task.status";
  tasks?: Array<
    {
      _key: string;
    } & SanityAssistInstructionTask
  >;
};

export type SanityAssistSchemaTypeAnnotations = {
  _type: "sanity.assist.schemaType.annotations";
  title?: string;
  fields?: Array<
    {
      _key: string;
    } & SanityAssistSchemaTypeField
  >;
};

export type SanityAssistOutputType = {
  _type: "sanity.assist.output.type";
  type?: string;
};

export type SanityAssistOutputField = {
  _type: "sanity.assist.output.field";
  path?: string;
};

export type SanityAssistInstructionContext = {
  _type: "sanity.assist.instruction.context";
  reference?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "assist.instruction.context";
  };
};

export type AssistInstructionContext = {
  _id: string;
  _type: "assist.instruction.context";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  context?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: null;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type SanityAssistInstructionUserInput = {
  _type: "sanity.assist.instruction.userInput";
  message?: string;
  description?: string;
};

export type SanityAssistInstructionPrompt = Array<{
  children?: Array<
    | {
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }
    | ({
        _key: string;
      } & SanityAssistInstructionFieldRef)
    | ({
        _key: string;
      } & SanityAssistInstructionContext)
    | ({
        _key: string;
      } & SanityAssistInstructionUserInput)
  >;
  style?: "normal";
  listItem?: never;
  markDefs?: null;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type SanityAssistInstructionFieldRef = {
  _type: "sanity.assist.instruction.fieldRef";
  path?: string;
};

export type SanityAssistInstruction = {
  _type: "sanity.assist.instruction";
  prompt?: SanityAssistInstructionPrompt;
  icon?: string;
  title?: string;
  userId?: string;
  createdById?: string;
  output?: Array<
    | ({
        _key: string;
      } & SanityAssistOutputField)
    | ({
        _key: string;
      } & SanityAssistOutputType)
  >;
};

export type SanityAssistSchemaTypeField = {
  _type: "sanity.assist.schemaType.field";
  path?: string;
  instructions?: Array<
    {
      _key: string;
    } & SanityAssistInstruction
  >;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | Geopoint
  | BlogPage
  | Author
  | Category
  | CategoryParent
  | Settings
  | SanityFileAsset
  | Favicon
  | AccordionSection
  | AccordionItem
  | TestimonialSection
  | Testimonial
  | UrlDefault
  | RichBlockHeadline
  | RichBlockDefault
  | SocialLink
  | BlogContent
  | PageBuilder
  | VisualHeader
  | FeatureSection
  | ImageObject
  | Cta
  | Hero
  | FontStyle
  | Home
  | Page
  | Seo
  | Slug
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | SanityAssistInstructionTask
  | SanityAssistTaskStatus
  | SanityAssistSchemaTypeAnnotations
  | SanityAssistOutputType
  | SanityAssistOutputField
  | SanityAssistInstructionContext
  | AssistInstructionContext
  | SanityAssistInstructionUserInput
  | SanityAssistInstructionPrompt
  | SanityAssistInstructionFieldRef
  | SanityAssistInstruction
  | SanityAssistSchemaTypeField;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../../apps/frontend/src/components/testimonial/query.ts
// Variable: TestimonialQuery
// Query: *[_type == "testimonial"] {  _type,  _key,  _id,  title,  testimonial,  author,  location,  image {    image,    caption  }}
export type TestimonialQueryResult = Array<{
  _type: "testimonial";
  _key: null;
  _id: string;
  title: string | null;
  testimonial: string | null;
  author: string | null;
  location: string | null;
  image: {
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
    caption: string | null;
  } | null;
}>;
// Variable: TestimonialSectionQuery
// Query: *[_type == "testimonialSection"] {  _type,  _key,  _id,  title,  "testimonials": testimonials[]-> {  _type,  _key,  _id,  title,  testimonial,  author,  location,  image {    image,    caption  }}}
export type TestimonialSectionQueryResult = Array<never>;

// Source: ../../apps/frontend/src/sanity/lib/queries.ts
// Variable: HomePageQuery
// Query: *[_type == "home"][0] {    "seo": seo,    "pageBuilder": pageBuilder[] {      _type == "hero" => {  _type,  _key,  title,  subtitle,  backgroundImage,  cta[] {    ...,  }},      _type == "featureSection" => {  _type,  _key,  title,  description,  image {    image,    alt,  },  "metadata": image.image.asset->metadata,},      _type == "visualHeader" => {        _type,        _key,        headline,        image,        "metadata": image.image.asset->metadata,      },      _type == "testimonialSection" => {  _type,  _key,  _id,  title,  "testimonials": testimonials[]-> {  _type,  _key,  _id,  title,  testimonial,  author,  location,  image {    image,    caption  }}},      _type == "accordionSection" => {  _type,  _key,  title,  image,  items[] {    ...,  }},    }  }
export type HomePageQueryResult = {
  seo: Seo | null;
  pageBuilder: Array<
    | {
        _type: "testimonialSection";
        _key: string;
        _id: null;
        title: string | null;
        testimonials: Array<{
          _type: "testimonial";
          _key: null;
          _id: string;
          title: string | null;
          testimonial: string | null;
          author: string | null;
          location: string | null;
          image: {
            image: {
              asset?: {
                _ref: string;
                _type: "reference";
                _weak?: boolean;
                [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
              };
              hotspot?: SanityImageHotspot;
              crop?: SanityImageCrop;
              alt?: string;
              _type: "image";
            } | null;
            caption: string | null;
          } | null;
        }> | null;
      }
    | {
        _type: "accordionSection";
        _key: string;
        title: string | null;
        image: ImageObject | null;
        items: Array<{
          _key: string;
          _type: "accordionItem";
          title?: string;
          content?: Array<{
            children?: Array<{
              marks?: Array<string>;
              text?: string;
              _type: "span";
              _key: string;
            }>;
            style?: "normal";
            listItem?: never;
            markDefs?: Array<{
              link?: string;
              _type: "link";
              _key: string;
            }>;
            level?: number;
            _type: "block";
            _key: string;
          }>;
        }> | null;
      }
    | {
        _type: "featureSection";
        _key: string;
        title: string | null;
        description: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?: "h2" | "normal";
          listItem?: never;
          markDefs?: Array<
            | {
                reference?: {
                  _ref: string;
                  _type: "reference";
                  _weak?: boolean;
                  [internalGroqTypeReferenceTo]?: "page";
                };
                _key: string;
              }
            | {
                url?: string;
                _key: string;
              }
          >;
          level?: number;
          _type: "block";
          _key: string;
        }> | null;
        image: {
          image: {
            asset?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
            };
            hotspot?: SanityImageHotspot;
            crop?: SanityImageCrop;
            alt?: string;
            _type: "image";
          } | null;
          alt: null;
        } | null;
        metadata: SanityImageMetadata | null;
      }
    | {
        _type: "hero";
        _key: string;
        title: string | null;
        subtitle: string | null;
        backgroundImage: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        } | null;
        cta: null;
      }
    | {
        _type: "visualHeader";
        _key: string;
        headline: RichBlockHeadline | null;
        image: ImageObject | null;
        metadata: SanityImageMetadata | null;
      }
  > | null;
} | null;
// Variable: PageQuery
// Query: *[_type == "page" && slug.current == $slug][0] {    "seo": seo,    "pageBuilder": pageBuilder[] {      _type == "hero" => {  _type,  _key,  title,  subtitle,  backgroundImage,  cta[] {    ...,  }},      _type == "featureSection" => {  _type,  _key,  title,  description,  image {    image,    alt,  },  "metadata": image.image.asset->metadata,},      _type == "visualHeader" => {        _type,        _key,        headline,        image,        "metadata": image.image.asset->metadata,      },      _type == "testimonialSection" => {  _type,  _key,  _id,  title,  "testimonials": testimonials[]-> {  _type,  _key,  _id,  title,  testimonial,  author,  location,  image {    image,    caption  }}},      _type == "accordionSection" => {  _type,  _key,  title,  image,  items[] {    ...,  }},    }  }
export type PageQueryResult = {
  seo: Seo | null;
  pageBuilder: Array<
    | {
        _type: "testimonialSection";
        _key: string;
        _id: null;
        title: string | null;
        testimonials: Array<{
          _type: "testimonial";
          _key: null;
          _id: string;
          title: string | null;
          testimonial: string | null;
          author: string | null;
          location: string | null;
          image: {
            image: {
              asset?: {
                _ref: string;
                _type: "reference";
                _weak?: boolean;
                [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
              };
              hotspot?: SanityImageHotspot;
              crop?: SanityImageCrop;
              alt?: string;
              _type: "image";
            } | null;
            caption: string | null;
          } | null;
        }> | null;
      }
    | {
        _type: "accordionSection";
        _key: string;
        title: string | null;
        image: ImageObject | null;
        items: Array<{
          _key: string;
          _type: "accordionItem";
          title?: string;
          content?: Array<{
            children?: Array<{
              marks?: Array<string>;
              text?: string;
              _type: "span";
              _key: string;
            }>;
            style?: "normal";
            listItem?: never;
            markDefs?: Array<{
              link?: string;
              _type: "link";
              _key: string;
            }>;
            level?: number;
            _type: "block";
            _key: string;
          }>;
        }> | null;
      }
    | {
        _type: "featureSection";
        _key: string;
        title: string | null;
        description: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?: "h2" | "normal";
          listItem?: never;
          markDefs?: Array<
            | {
                reference?: {
                  _ref: string;
                  _type: "reference";
                  _weak?: boolean;
                  [internalGroqTypeReferenceTo]?: "page";
                };
                _key: string;
              }
            | {
                url?: string;
                _key: string;
              }
          >;
          level?: number;
          _type: "block";
          _key: string;
        }> | null;
        image: {
          image: {
            asset?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
            };
            hotspot?: SanityImageHotspot;
            crop?: SanityImageCrop;
            alt?: string;
            _type: "image";
          } | null;
          alt: null;
        } | null;
        metadata: SanityImageMetadata | null;
      }
    | {
        _type: "hero";
        _key: string;
        title: string | null;
        subtitle: string | null;
        backgroundImage: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        } | null;
        cta: null;
      }
    | {
        _type: "visualHeader";
        _key: string;
        headline: RichBlockHeadline | null;
        image: ImageObject | null;
        metadata: SanityImageMetadata | null;
      }
  > | null;
} | null;
// Variable: SeoQuery
// Query: *[_type == "settings"][0] {    seo {      _type,      title,      description,      keywords,      noIndex,      noFollow    },    favicon {      'svg': svg.asset->url,      'png96': png96.asset->url,      'ico': ico.asset->url,      'appleTouchIcon': appleTouchIcon.asset->url    }  }
export type SeoQueryResult = {
  seo: {
    _type: "seo";
    title: string | null;
    description: string | null;
    keywords: Array<string> | null;
    noIndex: boolean | null;
    noFollow: boolean | null;
  } | null;
  favicon: {
    svg: string | null;
    png96: string | null;
    ico: string | null;
    appleTouchIcon: string | null;
  } | null;
} | null;
// Variable: BlogPostQuery
// Query: *[_type == "blogPage" && slug.current == $slug][0] {    title,    slug,    mainImage,    author,    content,    publishedAt  }
export type BlogPostQueryResult = {
  title: string | null;
  slug: Slug | null;
  mainImage: ImageObject | null;
  author: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  } | null;
  content: BlogContent | null;
  publishedAt: string | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    '*[_type == "testimonial"] {\n  _type,\n  _key,\n  _id,\n  title,\n  testimonial,\n  author,\n  location,\n  image {\n    image,\n    caption\n  }\n}': TestimonialQueryResult;
    '*[_type == "testimonialSection"] {\n  _type,\n  _key,\n  _id,\n  title,\n  "testimonials": testimonials[]-> {\n  _type,\n  _key,\n  _id,\n  title,\n  testimonial,\n  author,\n  location,\n  image {\n    image,\n    caption\n  }\n}\n}': TestimonialSectionQueryResult;
    '*[_type == "home"][0] {\n    "seo": seo,\n    "pageBuilder": pageBuilder[] {\n      _type == "hero" => {\n  _type,\n  _key,\n  title,\n  subtitle,\n  backgroundImage,\n  cta[] {\n    ...,\n  }\n},\n      _type == "featureSection" => {\n  _type,\n  _key,\n  title,\n  description,\n  image {\n    image,\n    alt,\n  },\n  "metadata": image.image.asset->metadata,\n},\n      _type == "visualHeader" => {\n        _type,\n        _key,\n        headline,\n        image,\n        "metadata": image.image.asset->metadata,\n      },\n      _type == "testimonialSection" => {\n  _type,\n  _key,\n  _id,\n  title,\n  "testimonials": testimonials[]-> {\n  _type,\n  _key,\n  _id,\n  title,\n  testimonial,\n  author,\n  location,\n  image {\n    image,\n    caption\n  }\n}\n},\n      _type == "accordionSection" => {\n  _type,\n  _key,\n  title,\n  image,\n  items[] {\n    ...,\n  }\n},\n    }\n  }': HomePageQueryResult;
    '*[_type == "page" && slug.current == $slug][0] {\n    "seo": seo,\n    "pageBuilder": pageBuilder[] {\n      _type == "hero" => {\n  _type,\n  _key,\n  title,\n  subtitle,\n  backgroundImage,\n  cta[] {\n    ...,\n  }\n},\n      _type == "featureSection" => {\n  _type,\n  _key,\n  title,\n  description,\n  image {\n    image,\n    alt,\n  },\n  "metadata": image.image.asset->metadata,\n},\n      _type == "visualHeader" => {\n        _type,\n        _key,\n        headline,\n        image,\n        "metadata": image.image.asset->metadata,\n      },\n      _type == "testimonialSection" => {\n  _type,\n  _key,\n  _id,\n  title,\n  "testimonials": testimonials[]-> {\n  _type,\n  _key,\n  _id,\n  title,\n  testimonial,\n  author,\n  location,\n  image {\n    image,\n    caption\n  }\n}\n},\n      _type == "accordionSection" => {\n  _type,\n  _key,\n  title,\n  image,\n  items[] {\n    ...,\n  }\n},\n    }\n  }': PageQueryResult;
    "\n  *[_type == \"settings\"][0] {\n    seo {\n      _type,\n      title,\n      description,\n      keywords,\n      noIndex,\n      noFollow\n    },\n    favicon {\n      'svg': svg.asset->url,\n      'png96': png96.asset->url,\n      'ico': ico.asset->url,\n      'appleTouchIcon': appleTouchIcon.asset->url\n    }\n  }\n": SeoQueryResult;
    '\n  *[_type == "blogPage" && slug.current == $slug][0] {\n    title,\n    slug,\n    mainImage,\n    author,\n    content,\n    publishedAt\n  }\n': BlogPostQueryResult;
  }
}
