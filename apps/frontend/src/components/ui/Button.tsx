import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { CgArrowLongRight } from "react-icons/cg";
import { ButtonOrLink, Props as ButtonOrLinkProps } from "./ButtonOrLink";

const buttonVariants = cva(
  [
    "py-2 px-4 font-sans font-light rounded-md text-lg tracking-widest flex items-center gap-2",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-button-gradient hover:bg-[position:75%] bg-[length:200%] bg-[position:0%] transition-[background-position] duration-300 text-black backdrop-blur-sm",
        ],
      },
      withArrow: {
        true: "",
        false: "",
      },
      width: {
        full: "w-full",
        auto: "w-auto",
        fit: "w-fit",
      },
    },
    defaultVariants: {
      intent: "primary",
      withArrow: false,
      width: "auto",
    },
  },
);

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  children,
  intent,
  withArrow = false,
  width = "auto",
  ...props
}: Props) => {
  return (
    <ButtonOrLink
      className={twMerge(buttonVariants({ intent, withArrow, width }), "group")}
      {...props}
    >
      {children}
      <div className="max-w-0 translate-x-[-10px] transform overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[20px] group-hover:translate-x-0 group-hover:opacity-100">
        {withArrow && <CgArrowLongRight />}
      </div>
    </ButtonOrLink>
  );
};
