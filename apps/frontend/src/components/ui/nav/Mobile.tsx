'use client';

import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} className='group relative px-2 py-1'>
    <span className='relative z-10'>{children}</span>
    <span className='absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-current transition-transform duration-300 group-hover:scale-x-100' />
  </Link>
);

const Logo = () => (
  <Link href='/'>
    <div className='flex gap-x-1 text-white'>
      <div className='font-cinzel text-2xl tracking-[3.2px]'>Aligned</div>
      <div className='font-belleAurore text-3xl tracking-[4.8px]'>Interior</div>
    </div>
  </Link>
);

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className='container absolute left-0 right-0 top-0 z-10 mx-auto py-4'>
      <div className='flex items-center justify-between'>
        <Logo />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-white p-2'
          aria-label='Toggle menu'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {isOpen ? (
              <path d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className='absolute left-0 right-0 top-full bg-black/90 py-4'>
          <div className='flex flex-col items-center gap-y-4 font-belleAurore text-2xl tracking-[3.2px] text-white'>
            {navLinks.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
