import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} className='group relative px-2 py-1'>
    <span className='relative z-10'>{children}</span>
    <span className='absolute left-0 bottom-0 w-full h-0.5 bg-current transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100' />
  </Link>
);

const Logo = () => (
  <Link href='/'>
    <div className='flex gap-x-1'>
      <div className='font-cinzel text-2xl tracking-[3.2px]'>Aligned</div>
      <div className='font-belleAurore text-3xl tracking-[4.8px]'>Interior</div>
    </div>
  </Link>
);

export const Navigation = () => {
  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className='container mx-auto flex justify-between items-center py-4 absolute top-0 left-0 right-0 z-10'>
      <Logo />
      <div className='font-belleAurore text-2xl tracking-[3.2px] flex gap-x-4'>
        {navLinks.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
