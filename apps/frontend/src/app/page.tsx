'use client';

import Hero from '@/components/Hero';
import ContentBlock from '@/components/ContentBlock';
import aiFbImage from './images/ai-fib.png';
import ScrollingContent from '@/components/ScrollingContent';

const contents = [
  { title: 'Content 1', image: aiFbImage },
  { title: 'Content 2', image: aiFbImage },
  { title: 'Content 3', image: aiFbImage },
];

export default function Home() {
  return (
    <>
      <Hero
        backgroundImage='https://s3-alpha-sig.figma.com/img/3b11/7d8f/0ff646891f1a5b16bafde9a9511ee0ab?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jo8ZKzRt8F7eud4k8Gz3Nv35X~V8lOEI2ZFIqZyfCoMv6ljnGiG2JKtR0Ws3NDfKkAlJeFwBpG~o2r8uGbJ9zXjqUHh5cHsXwKCk4pW-bSX3U1lNh9ug-wHtaC1XfEuheMmF8GoERvq0PL0Yl~Hk-~Sj-JRTbqdl3RRFlb-HxeIEzODpJvjz2J8f3f1NBGreoYLo4w-BbVGVfG0r6afjdBEnRurIOPYY8GG5fjYmyrtwuRVwpk9RQ5eU5U3awRnmbfriedh08U83eXIID2CVjPXJPQZBs6h20nBFxTyu-L7ZgnkffKekyvxVW350pc1dKt0WkSxzErJnudeCsd0Qrw__'
        title='Welcome to Aligned Interior'
        subtitle='Your home, your style'
      />
      <ContentBlock
        title='Align your space'
        description="Your home is more than just a living space — it's a reflection of your life’s energy and aspirations. Through the art of feng shui and environmental psychology, your home can be aligned to optimize the flow of your living space in ways that directly support your goals and enhance your mental and emotional well being."
      />
      <ContentBlock
        emphasis='Do you find your home difficult to live in?'
        description="Do you hate going home because your house feels cluttered, you feel stuck or unsure of how to organize or decorate your space? Are you looking to enhance the natural flow of your living space? Whether you're seeking small adjustments or a complete transformation, I’m here to guide you through intentional changes that bring lasting results and beautiful living spaces. "
        image={aiFbImage}
      />
      <ScrollingContent contents={contents} />
    </>
  );
}
