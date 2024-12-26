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
      className={`flex min-h-[200px] flex-col items-start justify-between rounded-lg bg-white bg-cover bg-center p-4 shadow-md lg:min-h-[440px] ${
        imageUrl ? "bg-no-repeat" : ""
      }`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <p className="font-belleAurore text-2xl">{testimonial}</p>
      <p className="mt-auto font-cinzel text-base">{`${authorInitials}, ${location}`}</p>
    </div>
  );
}
