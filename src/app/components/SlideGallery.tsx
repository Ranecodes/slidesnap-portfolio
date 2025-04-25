// /app/components/SlideGallery.tsx
'use client';

import React, { useState } from 'react';
import { slideData } from '../data/slides';
import { SlideCategory } from '../types';
import FilterTabs from './FilterTabs';
import SlideCard from './SlideCard';

const SlideGallery = () => {
  const [activeCategory, setActiveCategory] = useState<SlideCategory>('All');

  const filteredSlides = activeCategory === 'All' 
    ? slideData 
    : slideData.filter(slide => slide.categories.includes(activeCategory));

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">My Slide Decks</h2>
          <FilterTabs 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSlides.map(slide => (
            <SlideCard key={slide.id} slide={slide} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlideGallery;