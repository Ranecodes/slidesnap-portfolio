// src/app/components/Hero.tsx
'use client';
import React from 'react';
import Image  from 'next/image';

const Hero = () => {
   const handleSmoothScroll = (e: React.MouseEvent) => {
      e.preventDefault();
  
      const targetId = e.currentTarget.getAttribute("href")?.slice(1);
      const targetElement = document.getElementById(targetId || "");
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  return (
    <section className=" min-h-[500px] flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--body-text)] mb-4">
            Hi, I am Ranehobasi
          </h1>
          <h2 className="text-xl md:text-2xl text-[var(--body-text)] mb-6">
            Frontend Developer &amp; Presentation Designer
          </h2>
          <p className="text-[var(--body-text)] max-w-lg mb-8">
            Creating captivating slides that tell your story with clarity and style
          </p>
          <a
            href="#gallery"
            onClick={handleSmoothScroll}
            className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            View Work
          </a>
        </div>

        {/* Right content */}
        <div className="md:w-1/2 relative h-64 md:h-80">
          {/* These would ideally be actual images of your slides */}
          <div className="absolute right-0 top-0 w-full h-full">
            <Image
              src="/catwallpaper.jpg"
              alt="Slide 1"
              fill
              className="object-cover rounded-md shadow-lg"
            />
          </div>
          <div className="absolute right-5 top-5 w-full h-full hover:scale-105">
            <Image
              src="/copy-of-feature-proposal-presentation.png"
              alt="Slide 2"
              fill
              className="object-cover rounded-md shadow-lg opacity-100"
            />                        
          </div>
          <div className="absolute right-10 top-10 w-full h-full hover:scale-105">
          <Image
              src="/slide-1.png"
              alt="Slide 2"
              fill
              className="object-cover rounded-md shadow-lg opacity-100"
            />   
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
