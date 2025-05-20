"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);

    // Check if we're on mobile only after component mounts (client-side)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Call once on mount
    handleResize();
    
    // Set up listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle play/pause specifically for the button click
  const handlePlayPauseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event from bubbling up
    
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Silent error handling
          });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

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
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const laptopVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5, // Smaller hover lift on mobile
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.section
      className="min-h-[450px] sm:min-h-[500px] flex items-center py-12 sm:py-16 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-between">
        {/* Content stack vertically on mobile, side by side on desktop */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-4">
          {/* Left content */}
          <motion.div
            className="w-full md:w-1/2 px-2 sm:pl-4 md:pl-10 text-center md:text-left"
            variants={containerVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--body-text)] mb-3 sm:mb-4"
              variants={childVariants}
            >
              Hi, I&apos;m Ranehobasi
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl md:text-2xl text-[var(--body-text)] mb-4 sm:mb-6"
              variants={childVariants}
            >
              Frontend Developer &amp; Visual Storyteller
            </motion.h2>

            <motion.h3
              className="text-[var(--body-text)] max-w-lg mx-auto md:mx-0 mb-6 sm:mb-8 text-sm sm:text-base"
              variants={childVariants}
            >
              Presentations that are not just beautiful, but strategically effective.
            </motion.h3>

            <motion.a
              href="#gallery"
              onClick={handleSmoothScroll}
              className="text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md transition-colors inline-block"
              style={{
                backgroundColor: "var(--btn-color)",
                color: "var(--btn-text)",
              }}
              variants={childVariants}
              whileHover="hover"
              whileTap="tap"
              animate={{ opacity: 1 }}
            >
              <motion.span variants={buttonVariants}>View Work</motion.span>
            </motion.a>
          </motion.div>

          {/* Right content with laptop video */}
          <motion.div
            className="w-full md:w-1/2 relative mb-6 md:mb-0"
            variants={containerVariants}
          >
            <div className="relative w-[90%] sm:w-[85%] md:w-full aspect-[4/3] max-w-md mx-auto">
              {/* Laptop mockup container */}
              <motion.div
                className="laptop-container relative w-full h-full"
                variants={laptopVariants}
                whileHover="hover"
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
                // Add touch event handlers for mobile
                onTouchStart={() => {
                  setIsHovered(true);
                }}
                onTouchEnd={() => {
                  setTimeout(() => setIsHovered(false), 2000); // Hide controls after 2 seconds
                }}
              >
                {/* Laptop base image */}
                <Image
                  src="/macbook.png"
                  alt="Laptop Mockup"
                  fill
                  className="object-contain z-10"
                  style={{pointerEvents: 'none'}}
                  priority
                />

                {/* Screen content area - positioned to align with the laptop screen */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="laptop-screen relative w-[75%] h-[65%] mt-[-5%] ml-[0.5%] overflow-hidden">
                    {/* Video player */}
                    <div className="w-full h-full bg-black relative" id="video-container">
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        id="mockup-video"
                        onPlay={() => {
                          setIsPlaying(true);
                        }}
                        onPause={() => {
                          setIsPlaying(false);
                        }}
                      >
                        <source src="/mockup-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Play/Pause button overlay - mobile-friendly version */}
                      {(isHovered || isMobile) && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                        >
                          <div 
                            className="bg-white bg-opacity-75 rounded-full p-2 sm:p-3 hover:bg-opacity-100 transition-all z-20 cursor-pointer"
                            onClick={handlePlayPauseClick}
                            id="play-pause-button"
                            style={{ 
                              boxShadow: '0 0 10px rgba(255,255,255,0.7)',
                              border: '2px solid white'
                            }}
                          >
                            {isPlaying ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ color: "black" }}
                                className="sm:w-6 sm:h-6"
                              >
                                <rect x="6" y="4" width="4" height="16"></rect>
                                <rect x="14" y="4" width="4" height="16"></rect>
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ color: "black" }}
                                className="sm:w-6 sm:h-6"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - visible on all devices */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 block"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--body-text)]"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;