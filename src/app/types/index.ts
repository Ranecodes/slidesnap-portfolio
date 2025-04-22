// /app/types/index.ts
export type SlideCategory = 'All' | 'Corporate' | 'Creative' | 'Educational';

export interface SlideItem {
  id: string;
  title: string;
  category: Exclude<SlideCategory, 'All'>;
  slideCount: number;
  thumbnailUrl: string;
}