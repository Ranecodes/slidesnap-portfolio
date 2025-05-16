// /app/components/SlideCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlideItem } from '../types';

interface SlideCardProps {
  slide: SlideItem;
}

const SlideCard = ({ slide }: SlideCardProps) => {
  // Card hover animation
  const cardVariants = {
    hover: { 
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover="hover"
      variants={cardVariants}
    >
      {/* Thumbnail with hover zoom effect */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={slide.thumbnailUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
            width={400}
            height={250}
          />
        </motion.div>
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2" style={{color: 'var(--no-change-text)'}}>{slide.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{slide.categories.join(', ')} • {slide.slideCount} slides</p>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {slide.categories.map(category => (
            <span 
              key={category} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm active-tab"
            >
              {category}
            </span>
          ))}
        </div>
        
        {/* View Button */}
        <Link href={`/slides/${slide.id}`} className="block">
          <motion.button 
            className="w-full py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded hover:opacity-90 transition-opacity cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Deck
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default SlideCard;