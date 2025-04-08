"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { cn } from "@/lib/utils";
import { handleScrollToSection } from "@/lib/utils";
import { useNavigation } from "./NavigationProvider";

const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <Link href="/">
    <div
      className={cn(
        "flex items-center gap-x-1 transition-colors duration-200",
        isScrolled && "text-brand-aligned-black",
        !isScrolled && "text-brand-winter-morning",
      )}
    >
      <div className="font-cinzel text-lg tracking-[3.2px] lg:text-2xl">
        Aligned Interior
      </div>
    </div>
  </Link>
);

interface NavItem {
  label: string;
  href: string;
  isSection?: boolean;
}

const NavMenu = ({
  isOpen,
  onClose,
  isScrolled,
  navItems,
}: {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
  navItems: NavItem[];
}) => {
  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-20 h-screen w-80 transform bg-white/60 shadow-lg backdrop-blur-md transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full",
        isScrolled && "bg-white/80",
      )}
    >
      <div className="flex flex-col p-8 pt-24">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="text-brand-aligned-black hover:text-brand-aligned-black/70 font-cinzel py-4 text-left text-lg transition-colors"
            onClick={() => {
              if (item.isSection) {
                handleScrollToSection(item.href.substring(1));
              }
              onClose();
            }}
          >
            {item.isSection ? (
              <span>{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const MenuButton = ({
  onClick,
  isOpen,
  isScrolled,
}: {
  onClick: () => void;
  isOpen: boolean;
  isScrolled: boolean;
}) => (
  <button
    onClick={onClick}
    className="relative z-30 h-10 w-10 rounded-full p-2 focus:outline-none"
    aria-label="Toggle Menu"
  >
    <div className="flex flex-col items-center justify-center gap-1.5">
      <span
        className={cn(
          "bg-brand-winter-morning block h-0.5 w-5 transition-all duration-300",
          isOpen && "bg-brand-aligned-black translate-y-2 rotate-45",
          isScrolled && "bg-brand-aligned-black",
        )}
      />
      <span
        className={cn(
          "bg-brand-winter-morning block h-0.5 w-5 transition-all duration-300",
          isOpen && "bg-brand-aligned-black opacity-0",
          isScrolled && "bg-brand-aligned-black",
        )}
      />
      <span
        className={cn(
          "bg-brand-winter-morning block h-0.5 w-5 transition-all duration-300",
          isOpen && "bg-brand-aligned-black -translate-y-2 -rotate-45",
          isScrolled && "bg-brand-aligned-black",
        )}
      />
    </div>
  </button>
);

export const DesktopNavigation = (props: { isStatic?: boolean }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { isStatic } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const { items: navItems } = useNavigation();

  console.log(navItems);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isStatic && <div className="h-[60px]" />}
      <nav
        className={`fixed top-0 right-0 left-0 z-10 transition-colors duration-200 ${
          isScrolled
            ? isOpen
              ? "bg-brand-winter-morning/80 shadow-nav-shadow"
              : "bg-brand-winter-morning/80 shadow-nav-shadow backdrop-blur-sm"
            : isStatic
              ? "bg-white"
              : "bg-transparent"
        }`}
      >
        <div className="relative z-20 container mx-auto flex items-center justify-between px-4 py-2 transition-colors duration-200 lg:flex">
          <Logo isScrolled={isStatic ? true : isScrolled} />
          <div className="flex items-center gap-x-4">
            <Button
              intent={
                isStatic ? "secondary" : isScrolled ? "secondary" : "primary"
              }
              onClick={() => handleScrollToSection("contact")}
              size={"small"}
              withArrow
            >
              <span>Contact</span>
            </Button>
            <MenuButton
              onClick={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
              isScrolled={isStatic ? true : isScrolled}
            />
          </div>
          <NavMenu
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            isScrolled={isScrolled}
            navItems={navItems}
          />
        </div>
      </nav>
    </>
  );
};
