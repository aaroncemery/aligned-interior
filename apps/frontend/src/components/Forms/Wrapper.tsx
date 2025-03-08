"use client";

import { ReactNode } from "react";

interface FormWrapperProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
}

export default function FormWrapper({
  children,
  title,
  subtitle,
  id,
}: FormWrapperProps) {
  return (
    <section className="bg-brand-interior-green px-4 py-16" id={id}>
      <div className={`container mx-auto max-w-4xl`}>
        <div className="rounded-lg bg-brand-winter-morning/80 p-8 shadow-lg backdrop-blur-xs">
          {title && (
            <h2 className="mb-2 text-center font-cinzel text-3xl tracking-wide text-brand-aligned-black">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mb-8 text-center font-sans text-lg text-gray-600">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
