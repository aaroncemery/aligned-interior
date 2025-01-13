import { cn } from "@/lib/utils";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick?: () => void;
  className?: string;
  color?: "white" | "black";
}

export const AnimatedHamburger = ({
  isOpen,
  onClick,
  className,
  color = "black",
}: AnimatedHamburgerProps) => {
  return (
    <button
      className={cn(
        "flex h-12 w-12 flex-col items-center justify-center gap-1",
        className,
      )}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div
        className={cn(
          "relative h-7 w-6",
          color === "white" && "text-white",
          color === "black" && "text-brand-aligned-black",
        )}
      >
        <span
          className={cn(
            "absolute h-0.5 w-6 bg-current transition-all duration-300",
            isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-2",
          )}
        />
        <span
          className={cn(
            "absolute h-0.5 w-6 bg-current transition-all duration-300",
            isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-2",
          )}
        />
      </div>
    </button>
  );
};
