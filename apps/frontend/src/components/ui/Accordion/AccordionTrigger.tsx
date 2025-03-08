import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import React from "react";

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={twMerge(
        "text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white/50 px-5 text-left font-cinzel text-xl leading-none shadow-[0_1px_0] outline-none",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] text-brand-interior-green transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";
