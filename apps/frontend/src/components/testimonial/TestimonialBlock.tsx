import TestimonialCard from "./TestimonialCard";

export default function TestimonialBlock() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="font-cinzel text-6xl">Testimonials</h2>
      </div>
      <div className="container flex items-center justify-center gap-4">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </>
  );
}
