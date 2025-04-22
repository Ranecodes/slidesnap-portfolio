// /app/components/Hero.tsx
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 min-h-[500px] flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I am Ranehobasi
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Frontend Developer &amp; Presentation Designer
          </h2>
          <p className="text-gray-600 max-w-lg mb-8">
            Creating captivating slides that tell your story with clarity and style
          </p>
          <Link href="#gallery" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            View Work
          </Link>
        </div>

        {/* Right content - Stacked slides */}
        <div className="md:w-1/2 relative h-64 md:h-80">
          {/* These would ideally be actual images of your slides */}
          <div className="absolute right-0 top-0 w-36 h-24 md:w-48 md:h-32 bg-blue-600 rounded-md opacity-80 transform transition-all duration-300 hover:scale-105"></div>
          <div className="absolute right-5 top-5 w-36 h-24 md:w-48 md:h-32 bg-blue-500 rounded-md opacity-60 transform transition-all duration-300 hover:scale-105"></div>
          <div className="absolute right-10 top-10 w-36 h-24 md:w-48 md:h-32 bg-blue-400 rounded-md opacity-40 transform transition-all duration-300 hover:scale-105"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;