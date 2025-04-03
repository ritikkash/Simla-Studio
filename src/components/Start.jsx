import React from "react";
import { motion } from "framer-motion";

const Start = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // Get navbar height (assuming navbar is 80px or 64px on smaller screens)
      const navbarHeight = window.innerWidth < 600 ? 64 : 80;
      
      // Calculate the element's position relative to the document
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      
      // Apply offset for the navbar height
      const offsetPosition = elementPosition - navbarHeight;

      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
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
      
      {/* Content container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20 mx-auto flex items-center justify-center h-full w-full px-4 md:w-4/5 lg:w-3/4 xl:w-2/3"
      >
        <div className="flex h-full flex-col md:flex-row items-center gap-50">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-1 flex-col justify-center items-center pb-8 text-center md:text-left md:pb-0 md:pr-8 lg:pr-12"
          >
            <div className="text-xs font-medium uppercase tracking-wider text-white shadow-text sm:text-sm">
              Welcome to Simla Studios
            </div>
            
            <div className="mt-0 mb-4 text-4xl font-bold flex flex-col items-center  leading-tight text-white shadow-text sm:text-5xl md:text-6xl lg:text-7xl">
              <h1>Create</h1> 
              <h1>Stunning</h1> 
              <h1>Videos</h1>
            </div>
            
            <p className="mb-8 text-base text-white shadow-text sm:text-lg text-center md:text-left">
            LET'S MAKE YOUR FILM/VIDEO LOOKS MORE <br className="hidden sm:block" />
            PROFESSIONAL.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center md:justify-start"
            >
              <button 
                onClick={scrollToContact}
                className="rounded-full bg-white px-6 py-3 font-medium text-black shadow-lg transition-all duration-300 hover:translate-y-1 hover:bg-black hover:text-white hover:shadow-xl active:translate-y-0 active:shadow-md sm:w-auto md:px-5 md:py-2 lg:px-6 lg:py-3"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
          
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden md:flex flex-1 flex-col items-center justify-center md:pl-8 lg:pl-12"
          >
            {/* Logo with left-right animation */}
            <motion.div
              animate={{
                x: [0, 5, -5, 5, -5, 0], // subtle left-right movement
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/src/assets/simla.png"
                alt="Simla Studios"
                className="max-h-80 w-auto object-contain sm:max-h-96 md:max-h-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                }}
              />
            </motion.div>
            
            {/* Stats boxes container with reduced margin-top */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex gap-4 mt-4" 
            >
              {/* Clients box */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
              >
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/80">Clients</div>
              </motion.div>
              
              {/* Projects box */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
              >
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-white/80">Projects</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Start;