import React from 'react';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
}

const Hero = ({ backgroundImage, title, subtitle }: HeroProps) => {
  return (
    <div
      className='relative h-screen flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative text-center text-white z-10'>
        <h1 className='text-4xl md:text-6xl font-cinzel mb-4'>{title}</h1>
        {subtitle && (
          <p className='text-xl md:text-2xl font-belleAurore'>{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
