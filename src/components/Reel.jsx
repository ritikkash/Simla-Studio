import React, { useState, useRef, useEffect } from 'react'
import reel from "../assets/Fiver Reel 1.mp4"

const Reel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
          }
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom,rgb(26, 38, 54), #1f2937)",
      }}
      className="flex flex-col justify-center items-center min-h-[400px] w-full px-4 sm:px-6 md:px-8"
    >
   
      <div 
        ref={containerRef}
        className={`bg-black border border-white/20 flex justify-center items-center mx-auto mt-10 md:mt-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden group transition-all duration-700 ease-in-out
          ${isDesktop && isInView ? 'w-full h-[calc(100vh-120px)] rounded-none px-0' : isDesktop ? 'w-full md:w-[80%] lg:w-[60%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[30px] md:rounded-[50px] px-4 sm:px-8 md:px-16 lg:px-24' : 'w-full h-[300px] rounded-[30px] px-4'}
        `}
        style={{
          transitionProperty: isDesktop ? 'width, height, border-radius, padding' : 'none',
          marginLeft: isDesktop && isInView ? 'auto' : undefined,
          marginRight: isDesktop && isInView ? 'auto' : undefined,
        }}
      >
        {!isPlaying ? (
          <div 
            onClick={handlePlay}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-10"
          >
            {/* Thumbnail preview */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-contain opacity-60 group-hover:opacity-40 transition-opacity duration-300"
              src={reel}
              muted
              playsInline
            />
            
            {/* Play button with animation */}
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <div className="w-0 h-0 border-t-[20px] sm:border-t-[25px] border-t-transparent border-l-[35px] sm:border-l-[45px] border-l-white border-b-[20px] sm:border-b-[25px] border-b-transparent ml-2" />
              </div>
              {/* Animated rings */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping animation-delay-1000" />
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-contain mx-auto"
            src={reel}
            autoPlay
            controls
            playsInline
            onEnded={() => setIsPlaying(false)}
          />
        )}
      </div>
    </div>
  )
}

export default Reel