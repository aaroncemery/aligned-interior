import Image from 'next/image';
import { Button } from '@repo/ui/button';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <h1 className='text-5xl font-belleAurore'>Hello World</h1>
      <h1 className='text-5xl font-cinzel'>Hello World</h1>
      <h1 className='text-5xl font-sans font-light'>Hello World</h1>
    </div>
  );
}
