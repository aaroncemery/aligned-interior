import {
  PortableTextComponentProps,
  PortableTextBlock,
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
      <h2 className="font-cinzel mb-4 text-3xl lg:text-5xl">{children}</h2>
    ),
    // ... other block types
  },
};

export const BlogPostSerializer = {
  block: {
    normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <p className="mb-4 font-sans text-lg font-light">{children}</p>
    ),
    h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h2 className="font-cormorant mb-4 text-4xl font-normal">{children}</h2>
    ),
    h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h3 className="font-cormorant mb-4 text-3xl font-normal">{children}</h3>
    ),
  },
  marks: {
    strong: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <span className="font-bold">{children}</span>
    ),
    em: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <span className="font-italic">{children}</span>
    ),
  },
};
