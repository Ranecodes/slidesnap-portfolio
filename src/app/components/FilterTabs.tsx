// /app/components/FilterTabs.tsx
'use client';

import React from 'react';
import { SlideCategory } from '../types';

interface FilterTabsProps {
  activeCategory: SlideCategory;
  onCategoryChange: (category: SlideCategory) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: SlideCategory[] = ['All', 'Corporate', 'Creative', 'Educational'];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-colors ${
            activeCategory === category
              ? 'active-tab' : 'inactive-tab'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;