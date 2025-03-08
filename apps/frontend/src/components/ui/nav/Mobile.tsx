"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AnimatedHamburger } from "../AnimatedHamburger";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="group relative px-2 py-1 text-brand-aligned-black"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-current transition-transform duration-300 group-hover:scale-x-100" />
  </Link>
);

interface LogoProps {
  isOpen?: boolean;
}

const Logo = ({ isOpen }: LogoProps) => {
  return (
    <Link href="/">
      <div
        className={cn(
          "flex gap-x-1 transition-colors duration-300",
          isOpen ? "text-brand-aligned-black" : "text-white",
        )}
      >
        <div className="font-cinzel text-2xl tracking-[3.2px]">Aligned</div>
        <div className="font-belleAurore text-3xl tracking-[4.8px]">
          Interior
        </div>
      </div>
    </Link>
  );
};

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="container absolute left-0 right-0 top-0 z-20 mx-auto py-4">
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-10 bg-brand-winter-morning/95 py-4 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-y-4 font-belleAurore text-2xl tracking-[3.2px] text-white">
            {navLinks.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      <div className="absolute z-20 flex items-center justify-between">
        <Logo isOpen={isOpen} />
        <AnimatedHamburger
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white"
          color={isOpen ? "black" : "white"}
        />
      </div>
    </nav>
  );
};
