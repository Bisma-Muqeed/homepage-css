import React from 'react';
import style from './Hero.module.css';
import Image from 'next/image';

// Define prop types
interface HeroProps {
  title: string;
  imageSrc: string;
  altText: string;
}

const Hero: React.FC<HeroProps> = ({ title, imageSrc, altText }) => {
  return (
    <div>
      <div className={style.heroContainer}>
        
      </div>
      <div className={style.heroImage}>
        <Image
          src={imageSrc}
          alt={altText}
          width={552}
          height={552}
        />
      </div>
      <h1 className={style.h1}>{title}</h1>
    </div>
  );
};

export default Hero;
