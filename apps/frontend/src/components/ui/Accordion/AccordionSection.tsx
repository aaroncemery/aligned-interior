import Accordion from "./Accordian";
import { AccordionSection as AccordionSectionType } from "../../../../sanity.types";

export const AccordionSection = ({ title, items }: AccordionSectionType) => {
  return (
    <div className="mx-auto bg-brand-winter-morning py-10">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-10 text-center font-cinzel text-4xl">{title}</h2>
        {items && <Accordion items={items} />}
      </div>
    </div>
  );
};
