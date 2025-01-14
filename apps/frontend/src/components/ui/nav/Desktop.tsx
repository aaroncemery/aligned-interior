"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { cn } from "@/lib/utils";
import { handleScrollToSection } from "@/lib/utils";
// interface NavLinkProps {
//   href: string;
//   children: React.ReactNode;
// }

// const NavLink = ({ href, children }: NavLinkProps) => (
//   <Link href={href} className="group relative px-2 py-1">
//     <span className="relative z-10">{children}</span>
//     <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-current transition-transform duration-300 group-hover:scale-x-100" />
//   </Link>
// );

const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <Link href="/">
    <div
      className={cn(
        "flex items-center gap-x-1 transition-colors duration-200",
        isScrolled && "text-brand-aligned-black",
        !isScrolled && "text-brand-winter-morning",
      )}
    >
      {/* <div className="w-10">
        <LogoIcon />
      </div> */}
      <div className="font-cinzel text-2xl tracking-[3.2px]">Aligned</div>
      <div className="font-belleAurore text-3xl tracking-[4.8px]">Interior</div>
    </div>
  </Link>
);

export const DesktopNavigation = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const navLinks = [
  //   { href: "#services", label: "Services" },
  //   { href: "#about", label: "About" },
  //   { href: "#contact", label: "Contact" },
  // ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-10 transition-colors duration-200 ${
        isScrolled
          ? "bg-brand-winter-morning/80 shadow-nav-shadow backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container relative z-20 mx-auto flex items-center justify-between px-4 py-2 transition-colors duration-200 lg:flex">
        <Logo isScrolled={isScrolled} />
        <Button
          intent="secondary"
          onClick={() => handleScrollToSection("contact")}
          size={"small"}
          withArrow
        >
          <span>Contact</span>
        </Button>
      </div>
      {/* <div className="flex gap-x-4 font-belleAurore text-2xl tracking-[3.2px] text-white">
        {navLinks.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div> */}
    </nav>
  );
};
