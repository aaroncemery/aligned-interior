import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ContentItem {
  title: string;
  image: StaticImageData;
}

interface ScrollingContentProps {
  contents: ContentItem[];
}

const ScrollingContent: React.FC<ScrollingContentProps> = ({ contents }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    // Adjust the logic to determine the active index based on the scroll position
    const newIndex = Math.floor(window.scrollY / window.innerHeight);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex h-screen'>
      <div className='flex-1 p-6 sticky top-0 h-screen overflow-y-auto'>
        {contents.map((item: ContentItem, index: number) => (
          <div
            key={index}
            className={`mb-24 transition-opacity duration-300 ${
              index === activeIndex ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <h2 className='text-2xl font-bold mb-4'>{item.title}</h2>
            {/* <p className='text-lg'>{item.description}</p> */}
          </div>
        ))}
      </div>
      <div className='flex-1 relative'>
        {contents.map((item: ContentItem, index: number) => (
          <Image
            key={index}
            src={item.image}
            alt={item.title}
            className={`absolute inset-0 object-cover transition-opacity duration-300 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingContent;
