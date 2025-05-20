"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  // Toggle play/pause specifically for the button click
  const handlePlayPauseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event from bubbling up
    
    if (videoRef.current) {
      if (videoRef.current.paused) {
        // If paused, play it
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Silent error handling
          });
      } else {
        // If playing, pause it
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const laptopVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
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
      className="min-h-[500px] flex items-center py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <motion.div
          className="md:w-1/2 pl-10 mb-10 md:mb-0"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[var(--body-text)] mb-4"
            variants={childVariants}
          >
            Hi, I&apos;m Ranehobasi
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-[var(--body-text)] mb-6"
            variants={childVariants}
          >
            Frontend Developer &amp; Visual Storyteller
          </motion.h2>

          <motion.h3
            className="text-[var(--body-text)] max-w-lg mb-8"
            variants={childVariants}
          >
            Presentations that are not just beautiful, but strategically effective.
          </motion.h3 >
          

          <motion.a
            href="#gallery"
            onClick={handleSmoothScroll}
            className="text-white px-8 py-3 rounded-md transition-colors inline-block"
            style={{
              backgroundColor: "var(--btn-color)",
              color: "var(--btn-text)",
            }}
            variants={childVariants}
            whileTap="tap"
            animate={{ opacity: 1 }}
          >
            <motion.span variants={buttonVariants}>View Work</motion.span>
          </motion.a>
        </motion.div>

        {/* Right content with laptop video */}
        <motion.div
          className="md:w-1/2 relative"
          variants={containerVariants}
        >
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
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
            >
              {/* Laptop base image */}
              {/* Mockup name changed */}
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

                    {/* Play/Pause button overlay - only appears on hover */}
                    {isHovered && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                      >
                        <div 
                          className="bg-white bg-opacity-75 rounded-full p-3 hover:bg-opacity-100 transition-all z-20 cursor-pointer"
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
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ color: "black" }}
                            >
                              <rect x="6" y="4" width="4" height="16"></rect>
                              <rect x="14" y="4" width="4" height="16"></rect>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ color: "black" }}
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
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
          width="30"
          height="30"
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