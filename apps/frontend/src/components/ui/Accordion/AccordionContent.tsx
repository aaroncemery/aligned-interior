import { twMerge } from "tailwind-merge";
import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    className={twMerge(
      "text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden bg-brand-winter-morning/70 text-[15px]",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="flex flex-col items-center gap-4 px-5 py-[15px] font-sans">
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
