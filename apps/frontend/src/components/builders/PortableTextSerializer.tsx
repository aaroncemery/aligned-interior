import {
  PortableTextComponentProps,
  PortableTextBlock,
  PortableTextMarkComponentProps,
} from "@portabletext/react";

export const PortableTextSerializer = {
  block: {
    normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <p className="mb-4 font-sans font-light">{children}</p>
    ),
    h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h1 className="mb-4 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h2 className="mb-4 font-cinzel text-3xl lg:text-5xl">{children}</h2>
    ),
    // ... other block types
  },
  marks: {
    strong: ({ children }: PortableTextMarkComponentProps) => (
      <span className="font-bold">{children}</span>
    ),
    em: ({ children }: PortableTextMarkComponentProps) => (
      <span className="font-italic">{children}</span>
    ),
    link: ({ children, value }: PortableTextMarkComponentProps) => (
      <a href={value?.href} className="font-bold underline hover:text-blue-500">
        {children}
      </a>
    ),
  },
};
