import { urlForImage } from "@/sanity/lib/utils";

export default function TestimonialCard({
  testimonial,
  author,
  location,
  image,
}: {
  testimonial: string;
  author: string;
  location: string;
  image: any;
}) {
  const imageUrl = urlForImage(image.image);
  const authorInitials = author
    .split(" ")
    .map((name: string) => name[0])
    .join("");
  return (
    <div
      className={`flex h-full min-h-[200px] flex-col items-start justify-between rounded-lg bg-white bg-cover bg-center p-4 shadow-md lg:min-h-[440px] ${
        imageUrl ? "bg-no-repeat" : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5)),url(${imageUrl})`,
      }}
    >
      <p className="font-cormorant text-2xl font-light">{testimonial}</p>
      <p className="font-cinzel mt-auto pt-4 text-base">{`${authorInitials}, ${location}`}</p>
    </div>
  );
}
