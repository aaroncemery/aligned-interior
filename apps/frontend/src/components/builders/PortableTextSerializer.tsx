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
      <h2 className="font-cinzel mb-4 text-3xl lg:text-5xl">{children}</h2>
    ),
    // ... other block types
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <ul className="list-inside list-disc text-center">{children}</ul>
    ),
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

export const AccordionSerializer = {
  block: {
    normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <p className="font-sans font-light">{children}</p>
    ),
    h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h1 className="mb-4 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h2 className="font-cinzel mb-4 text-3xl lg:text-5xl">{children}</h2>
    ),
    // ... other block types
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <ul className="list-inside list-disc font-sans font-light">{children}</ul>
    ),
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
    link: ({ children, value }: PortableTextMarkComponentProps) => (
      <a
        href={value?.href}
        className="hover:text-brand-burnt-red font-bold underline"
      >
        {children}
      </a>
    ),
  },
};
