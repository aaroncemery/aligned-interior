import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection({
  testimonials,
  title,
}: {
  testimonials: any;
  title: string;
}) {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 flex flex-[1_0_0] flex-col items-center justify-center">
        <h2 className="font-cinzel text-4xl lg:text-6xl">{title}</h2>
      </div>
      <div className="grid grid-cols-3 items-stretch justify-center gap-4">
        {testimonials.map((testimonial: any, index: number) => {
          return (
            <div className="h-full" key={`testimonial-${index}`}>
              <TestimonialCard {...testimonial} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
