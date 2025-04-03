import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    quote: "Working with Simla Studio was an absolute game-changer for our project. Their attention to detail, creativity, and technical skills took our raw footage and transformed it into a captivating story. They truly understood our vision and added a level of professionalism and polish that exceeded our expectations. Their ability to communicate and collaborate made the entire process seamless and enjoyable. We highly recommend Gashwa Studio for anyone seeking a talented and dedicated video editor.",
    author: "Global Rashid",
    role: "Client"
  },
  {
    id: 2,
    quote: "Simla Studio have talented and versatile video editor and filmmaking team. They have a keen eye for aesthetics and a gift for crafting visually compelling stories. Their professionalism, creativity, and dedication are unmatched. In our Documentary film he did a really great job.",
    author: "Silver Oak Farm",
    role: "Client"
  },
  {
    id: 3,
    quote: "From the moment we started working with Simla Studio, we knew we were in good hands. Their attention to detail, creative approach, and commitment to excellence made the entire editing process a breeze. They seamlessly merged our vision with their technical expertise, resulting in a final product that exceeded our expectations. Gashwa Studio has a knack for pacing and storytelling that brought our video to life, leaving a lasting impact.",
    author: "Manish Agarwal",
    role: "Client"
  }
];

const TestimonialCard = ({ testimonial, isActive, isMobile }) => {
  return (
    <div 
      className={`p-6 rounded-xl ${isActive ? "bg-gray-800 shadow-lg" : "bg-gray-800/50"} h-full flex flex-col`}
      style={{ minHeight: isMobile ? '100%' : 'auto' }}
    >
      <div className="flex items-start mb-4">
        <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-300 mb-4 text-base md:text-lg italic flex-grow">"{testimonial.quote}"</p>
      <div className="border-t border-gray-700 pt-3">
        <p className="text-white font-semibold">{testimonial.author}</p>
        <p className="text-purple-400 text-xs md:text-sm">{testimonial.role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-10"
        >
          <h2 className="text-xs md:text-sm uppercase tracking-wider text-purple-400 mb-2">
            TESTIMONIALS
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            WHAT CLIENTS SAY
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Hear what satisfied clients have to say about the extraordinary impact of my work.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div 
          variants={itemVariants}
          className="hidden lg:grid grid-cols-3 gap-6 mb-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <TestimonialCard
                testimonial={testimonial}
                isActive={true}
                isMobile={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <motion.div 
          variants={itemVariants}
          className="lg:hidden relative mb-8 overflow-hidden"
        >
          <motion.div
            key={activeTestimonial}
            custom={1} // Direction for animation
            initial="enter"
            animate="center"
            exit="exit"
            variants={carouselVariants}
            className="w-full"
          >
            <TestimonialCard
              testimonial={testimonials[activeTestimonial]}
              isActive={true}
              isMobile={true}
            />
          </motion.div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${activeTestimonial === index ? 'bg-purple-500 w-4 md:w-6' : 'bg-gray-600'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;