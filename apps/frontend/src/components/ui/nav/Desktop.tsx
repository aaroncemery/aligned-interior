import Link from "next/link";
import React from "react";
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

const Logo = () => (
  <Link href="/">
    <div className="flex items-center gap-x-1 text-white">
      {/* <div className="w-10">
        <LogoIcon />
      </div> */}
      <div className="font-cinzel text-2xl tracking-[3.2px]">Aligned</div>
      <div className="font-belleAurore text-3xl tracking-[4.8px]">Interior</div>
    </div>
  </Link>
);

export const DesktopNavigation = () => {
  // const navLinks = [
  //   { href: "#services", label: "Services" },
  //   { href: "#about", label: "About" },
  //   { href: "#contact", label: "Contact" },
  // ];

  return (
    <nav className="container absolute left-0 right-0 top-0 z-10 mx-auto hidden items-center justify-between py-4 lg:flex">
      <Logo />
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
