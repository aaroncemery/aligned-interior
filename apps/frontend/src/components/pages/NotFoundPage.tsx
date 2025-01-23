"use client";

import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/utils";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { PortableTextSerializer } from "@/components/builders/PortableTextSerializer";
interface NotFoundPageProps {
  title: string;
  description: any;
  image: SanityImageObject;
}

export default function NotFoundPage({
  title,
  description,
  image,
}: NotFoundPageProps) {
  console.log("image", image);
  const [footerHeight, setFooterHeight] = useState(0);
  const imageUrl = urlForImage(image)?.width(1920).quality(80).url();

  useEffect(() => {
    const getFooterHeight = () => {
      const footer = document.querySelector("footer");
      return footer ? footer.clientHeight : 0;
    };
    setFooterHeight(getFooterHeight());
  }, []);

  const pageHeightMinusFooter = `calc(100vh - ${footerHeight}px)`;

  return (
    <>
      <div
        style={{ minHeight: pageHeightMinusFooter }}
        className="grid grid-cols-1 grid-rows-[1fr_auto_1fr] bg-white lg:grid-cols-[max(50%,36rem)_1fr]"
      >
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-base/8 font-semibold text-indigo-600">404</p>
            <h1 className="mb-4 mt-2 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              {title}
            </h1>
            <PortableText
              value={description}
              components={PortableTextSerializer}
            />
          </div>
        </main>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            alt=""
            src={imageUrl}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
