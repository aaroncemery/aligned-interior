import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection({
  testimonials,
  title,
}: {
  testimonials: any;
  title: string;
}) {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8 mt-10 flex flex-[1_0_0] flex-col items-center justify-center lg:mb-10 lg:mt-28">
        <h2 className="font-cinzel text-4xl lg:text-6xl">{title}</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 lg:flex-nowrap">
        {testimonials.map((testimonial: any, index: number) => {
          return (
            <TestimonialCard key={`testimonial-${index}`} {...testimonial} />
          );
        })}
      </div>
    </div>
  );
}
