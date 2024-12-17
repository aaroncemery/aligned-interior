import TestimonialCard from "./TestimonialCard";

export default function TestimonialBlock() {
  return (
    <div className="container">
      <div className="my-10 flex flex-[1_0_0] flex-col items-center justify-center lg:my-28">
        <h2 className="font-cinzel text-6xl">Testimonials</h2>
      </div>
      <div className="flex items-center justify-center gap-4">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
