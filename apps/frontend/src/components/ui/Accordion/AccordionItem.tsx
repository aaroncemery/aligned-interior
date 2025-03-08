import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";
import React from "react";

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof AccordionPrimitive.Item>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Item
    className={twMerge(
      "focus-within:shadow-brand-interior-green/30 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </AccordionPrimitive.Item>
));

AccordionItem.displayName = "AccordionItem";
