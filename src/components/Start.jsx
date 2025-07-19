import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Counter component for animating numbers
const Counter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);
  
  return <>{count}+</>;
};

const Start = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Start the animation after the component mounts
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // Get navbar height (assuming navbar is 80px or 64px on smaller screens)
      const navbarHeight = window.innerWidth < 600 ? 64 : 80;

      // Calculate the element's position relative to the document
      const elementPosition =
        contactSection.getBoundingClientRect().top + window.pageYOffset;

      // Apply offset for the navbar height
      const offsetPosition = elementPosition - navbarHeight;

      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image with fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content container - Added pt-16 for small screens and pt-8 for larger screens */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20 mx-auto flex items-center justify-center h-full w-full px-4 pt-16 md:pt-8 md:w-4/5 lg:w-3/4 xl:w-2/3"
      >
        <div className="flex h-full flex-col md:flex-row items-center gap-50">
          {/* Left Content - Added mt-12 for small screens */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col justify-center mt-12 md:mt-0 pb-8 text-center md:pb-0 md:pr-8 lg:pr-12"
          >
            <div className="text-xs font-medium uppercase tracking-wider text-white shadow-text sm:text-sm">
              Welcome to Simla Studios
            </div>

            <div className="mt-0 mb-4 text-4xl font-bold flex flex-col leading-tight text-white shadow-text sm:text-5xl md:text-6xl lg:text-7xl">
              <h1>LET'S MAKE YOUR FILM/VIDEO</h1>
              <h1>LOOKS MORE PROFESSIONAL</h1>
            </div>

            {/* Container for Stats and Line */} 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col items-center mt-8"
            >
              {/* Stats boxes container */} 
              <AnimatePresence>
                {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }} // Delay after parent container animation
                    className="flex gap-4 justify-center mb-0 pb-0" // Centered, remove bottom margin and padding
                  >
                    {/* Clients box with animated counter */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-black/60 rounded-t-xl rounded-b-none p-4 text-center border border-white/20 w-40"
                    >
                      <div className="text-3xl font-bold text-white">
                        {isVisible && <Counter from={0} to={150} duration={2.5} />}
                      </div>
                      <div className="text-sm text-white/80">Clients</div>
                    </motion.div>

                    {/* Projects box with animated counter */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-black/60 rounded-t-xl rounded-b-none p-4 text-center border border-white/20 w-40"
                    >
                      <div className="text-3xl font-bold text-white">
                        {isVisible && <Counter from={0} to={1000} duration={2.5} />}
                      </div>
                      <div className="text-sm text-white/80">Projects</div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Horizontal Line */} 
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ duration: 0.8, delay: 0.8 }} // Delay after stats boxes animation
                className="mt-0 h-0.5 bg-white w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto" // Centered, remove top margin
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }} // Delay after line animation
              className="flex justify-center mt-8" // Added margin-top
            >
              <button
                onClick={scrollToContact}
                className="rounded-full bg-white px-6 py-3 font-medium text-black shadow-lg transition-all duration-300 hover:translate-y-1 hover:bg-black hover:text-white hover:shadow-xl active:translate-y-0 active:shadow-md sm:w-auto md:px-5 md:py-2 lg:px-6 lg:py-3"
              >
                Contact Us
              </button>
            </motion.div>

          </motion.div>
          </div>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="fixed bottom-5 right-5 z-50"
        >
          <a
            href="https://wa.me/917018674749"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:translate-y-1 hover:bg-green-600 active:translate-y-0 active:shadow-md"
          >
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
              className="lucide lucide-message-circle"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
            Let's Discuss &gt;&gt;
          </a>
        </motion.div>

      </div>
    
  );
};

export default Start;