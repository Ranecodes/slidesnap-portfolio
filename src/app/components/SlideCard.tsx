// /app/components/SlideCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SlideItem } from '../types';

interface SlideCardProps {
  slide: SlideItem;
}

const SlideCard: React.FC<SlideCardProps> = ({ slide }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-none overflow-hidden transition-transform hover:shadow-md hover:scale-[1.02]">
      <Link href={slide.slidesUrl} key={slide.id} target="_blank" rel="noopener noreferrer"> 
      <div className="relative h-48 w-full">
        <Image
          src={slide.thumbnailUrl}
          alt={slide.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg">{slide.title}</h3>
        <p className="text-gray-500 text-sm mt-1">
          {slide.categories.join(', ')} • {slide.slideCount} slides
        </p>
      </div>
      </Link>
    </div>
  );
};

export default SlideCard;