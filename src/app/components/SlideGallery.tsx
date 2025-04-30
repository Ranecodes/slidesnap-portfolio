// /app/components/SlideGallery.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideData } from '../data/slides';
import { SlideCategory, SlideItem } from '../types';
import FilterTabs from './FilterTabs';
import SlideCard from './SlideCard';

const SlideGallery = () => {
  const [activeCategory, setActiveCategory] = useState<SlideCategory>('All');

  const filteredSlides = activeCategory === 'All' 
    ? slideData 
    : slideData.filter(slide => slide.categories.includes(activeCategory));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="gallery" 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
          variants={headerVariants}
        >
          <h2 className="text-3xl font-bold mb-4 md:mb-0">My Slide Decks</h2>
          <FilterTabs 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {filteredSlides.map((slide, index) => (
            <AnimatedSlideCard key={slide.id} slide={slide} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Wrapper component to animate each card
interface AnimatedSlideCardProps {
  slide: SlideItem; 
  index: number;
}

const AnimatedSlideCard = ({ slide, index }: AnimatedSlideCardProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
    >
      <SlideCard slide={slide} />
    </motion.div>
  );
};

export default SlideGallery;