// /app/types/index.ts
export type SlideCategory = 'All' | 'Corporate' | 'Creative' | 'Educational';

export interface SlideItem {
  id: string;
  title: string;
  categories: Exclude<SlideCategory, 'All'>[];
  slideCount: number;
  thumbnailUrl: string;
  slidesUrl: string;
}