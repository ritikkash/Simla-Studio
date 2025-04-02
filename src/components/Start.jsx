import React from "react";
import { motion } from "framer-motion";

const Start = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
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
        className="relative z-20 mx-auto h-full w-full px-4 pt-1 pb-4 md:pt-2 md:pb-6 md:w-4/5 lg:w-3/4 xl:w-2/3"
      >
        <div className="flex h-full flex-col md:flex-row">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-1 flex-col justify-center -mt-30 md:-mt-12 lg:-mt-22 pb-8 text-center md:text-left md:pb-0 md:pr-8 lg:pr-12"
          >
            <div className="text-xs font-medium uppercase tracking-wider text-white shadow-text sm:text-sm">
              Welcome to Gashwa Studios
            </div>

            <h1 className="mt-0 mb-4 text-4xl font-bold leading-tight text-white shadow-text sm:text-5xl md:text-6xl lg:text-7xl">
              Create <br className="md:hidden" />
              Stunning <br className="md:hidden" />
              Videos
            </h1>

            <p className="mb-8 text-base text-white shadow-text sm:text-lg">
              Transform your Film and Video into <br className="hidden sm:block" />
              captivating content.
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
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden md:flex flex-1 items-center justify-center md:pl-8 lg:pl-12"
          >
            <img
              src="/src/assets/simla.png"
              alt="Gashwa Studios"
              className="max-h-80 w-auto object-contain sm:max-h-96 md:max-h-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Start;