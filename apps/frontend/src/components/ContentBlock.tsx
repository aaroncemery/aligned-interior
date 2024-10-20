import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface ContentBlockProps {
  title?: string;
  emphasis?: string;
  description: string;
  image?: StaticImageData;
}

const ContentBlock = ({
  title,
  emphasis,
  description,
  image,
}: ContentBlockProps) => {
  return (
    <div
      className={`container relative flex items-center justify-center px-4 py-10 lg:py-28 mx-auto ${image && 'gap-x-9'}`}
    >
      {image && <Image className='rounded-md' src={image} alt={title || ''} />}
      <div className='max-w-7xl mx-auto w-full'>
        {title && (
          <h1 className='text-4xl md:text-7xl font-cinzel mb-4 text-center'>
            {title}
          </h1>
        )}
        <p className='text-lg font-sans font-light'>
          {emphasis && <span className='font-bold'>{emphasis} </span>}{' '}
          {description}
        </p>
      </div>
    </div>
  );
};

export default ContentBlock;
