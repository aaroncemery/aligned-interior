import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionItem as AccordionItemType } from "../../../../sanity.types";
import { PortableText } from "@portabletext/react";
import { AccordionItem } from "./AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger";
import { AccordionContent } from "./AccordionContent";
const Accordion = ({ items }: { items: AccordionItemType[] }) => (
  <AccordionPrimitive.Root
    className="bg-mauve6 mx-auto w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {items.map((item, index) => (
      <AccordionItem key={index} value={`item-${index + 1}`}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        {item.content && (
          <AccordionContent>
            <PortableText value={item.content} />
          </AccordionContent>
        )}
      </AccordionItem>
    ))}
  </AccordionPrimitive.Root>
);
export default Accordion;
