import Accordion from "./Accordian";
import { AccordionSection as AccordionSectionType } from "../../../../sanity.types";
import { Button } from "../Button";

export const AccordionSection = ({ title, items }: AccordionSectionType) => {
  return (
    <div className="mx-auto bg-brand-winter-morning py-10">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-10 text-center font-cinzel text-4xl">{title}</h2>
        <div className="flex flex-col items-center gap-4">
          {items && <Accordion items={items} />}
          <Button>Contact</Button>
        </div>
      </div>
    </div>
  );
};
