import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";

import { AccordionItem } from "./AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger";

const Accordion = () => (
  <AccordionPrimitive.Root
    className="bg-mauve6 mx-auto w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Decluttering</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Organization</AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Curation</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </AccordionPrimitive.Root>
);

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    className={twMerge(
      "text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden bg-brand-winter-morning text-[15px]",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="px-5 py-[15px] font-sans">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export default Accordion;
