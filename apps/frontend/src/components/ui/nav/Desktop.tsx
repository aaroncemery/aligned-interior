import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink
        className={cn(
          `bg-transparent px-1 text-2xl hover:bg-transparent hover:text-brand-winter-morning`,
        )}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-line-gradient transition-transform duration-300 group-hover:scale-x-100" />
      </NavigationMenuLink>
    </Link>
  );
};

export const DesktopNavigation = () => {
  return (
    <NavigationMenu className="absolute left-0 top-0">
      <NavigationMenuList>
        <NavigationMenuItem className="bg-transparent font-belleAurore text-2xl tracking-[3.2px] text-brand-winter-morning">
          <NavLink href="/">Home</NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
