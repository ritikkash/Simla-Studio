import React from "react";
import { motion } from "framer-motion";
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

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.1, delay: index * 0.1 }}
      className="relative bg-white rounded-xl shadow-lg h-full flex flex-col overflow-hidden transition-all duration-500 ease-in-out p-2"
    >
      {/* Thumbnail with Play Button */}
      <div className="w-full overflow-hidden rounded-t-xl aspect-w-16 aspect-h-11 relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 transition-all duration-500 ease-in-out group-hover:bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:bg-white/30 group-hover:scale-110">
            <svg 
              className="w-8 h-8 text-purple-400 transition-all duration-500 ease-in-out group-hover:scale-110" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-2 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-gray-900 text-center transition-all duration-500 ease-in-out">{project.title}</h3>
      </div>
    </motion.div>
  );
};

const MyWorks = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-gray-900 min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[80%] mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-2">
            Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            My Works
          </h3>
          <div className="mt-4 h-1 w-20 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 h-full">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;