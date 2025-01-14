import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionItem as AccordionItemType } from "../../../../sanity.types";
import { PortableText } from "@portabletext/react";
import { AccordionItem } from "./AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger";
import { AccordionContent } from "./AccordionContent";
import { Button } from "../Button";
const Accordion = ({ items }: { items: AccordionItemType[] }) => (
  <AccordionPrimitive.Root
    className="mx-auto w-full rounded-md bg-brand-winter-morning/10 shadow-[0_2px_10px] shadow-black/5 backdrop-blur-sm"
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
            <Button width="fit" size={"small"} withArrow={true}>
              Contact
            </Button>
          </AccordionContent>
        )}
      </AccordionItem>
    ))}
  </AccordionPrimitive.Root>
);
export default Accordion;
