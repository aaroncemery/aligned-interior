interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
}

const Hero = ({ backgroundImage, title, subtitle }: HeroProps) => {
  return (
    <div
      className='relative py-32 min-h-[50vh] flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative text-center text-white z-10 max-w-2xl'>
        <h1 className='text-4xl md:text-7xl font-cinzel mb-4'>{title}</h1>
        {subtitle && (
          <p className='text-xl md:text-2xl font-belleAurore'>{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
