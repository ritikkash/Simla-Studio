import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  { 
    id: 1, 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "Documentary Film",
    link: "https://example.com/documentary" 
  },
  { 
    id: 2, 
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "Corporate Ads",
    link: "https://example.com/corporate-ads" 
  },
  { 
    id: 3, 
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "YouTube Videos",
    link: "https://youtube.com/your-channel" 
  },
  { 
    id: 4, 
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "Reels and Shorts",
    link: "https://instagram.com/your-reels" 
  },
  { 
    id: 5, 
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "Graphic Design",
    link: "https://behance.net/your-portfolio" 
  },
  { 
    id: 6, 
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "Music Videos",
    link: "https://vimeo.com/your-music-videos" 
  },
];

const ProjectCard = ({ project, isMobile, activeProject, setActiveProject }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setActiveProject(activeProject === project.id ? null : project.id);
    } else {
      window.open(project.link, "_blank");
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-xl"
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
        <h3 className="text-white text-xl font-semibold">{project.title}</h3>
      </div>
      
      <motion.div
        className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
          !isMobile 
            ? "opacity-0 group-hover:opacity-100" 
            : activeProject === project.id ? "opacity-100" : "opacity-0"
        }`}
      >
        <button 
          className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.link, "_blank");
          }}
        >
          View Project
        </button>
      </motion.div>
    </motion.div>
  );
};

const MyWorks = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start("visible");
    }
  }, [sectionControls, sectionInView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={sectionControls}
      variants={sectionVariants}
      className="bg-gray-900 py-12 px-4 md:px-12"
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Works
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isMobile={isMobile}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default MyWorks;