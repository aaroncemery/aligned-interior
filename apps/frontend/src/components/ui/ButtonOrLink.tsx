import { ComponentProps } from "react";
import Link from "next/link";

type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"div">;

export interface Props extends ButtonOrLinkProps {
  href?: string;
}

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
export function ButtonOrLink({ href, ...props }: Props) {
  const isLink = typeof href !== "undefined";
  const ButtonOrLink = isLink ? "div" : "button";

  const content = <ButtonOrLink {...props} />;

  if (isLink) {
    return (
      <Link className="hover:cursor-pointer" href={href}>
        {content}
      </Link>
    );
  }

  return content;
}
