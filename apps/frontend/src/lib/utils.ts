import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (id: string) => {
  if (typeof document === "undefined") return;

  // Add a small delay to ensure the DOM is fully loaded
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 100; // 100px offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

export const handleScrollToSection = (id: string) => {
  if (id) {
    scrollToSection(id);
  }
};
