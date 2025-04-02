import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    id: 1, 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "Documentry Film" 
  },
  { 
    id: 2, 
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "Corporate Ads" 
  },
  { 
    id: 3, 
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "YouTube Videos" 
  },
  { 
    id: 4, 
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "Reels and Shorts" 
  },
  { 
    id: 5, 
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "Graphic Designer" 
  },
  { 
    id: 6, 
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    title: "Music Videos" 
  },
];

const MyWorks = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (projectId, isMobile) => {
    if (isMobile) {
      setActiveProject(activeProject === projectId ? null : projectId);
    } else {
      // For desktop, you might want to navigate or show a modal
      alert(`Viewing project ${projectId}`);
    }
  };

  return (
    <div className="bg-gray-900 py-12 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
        My Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleProjectClick(project.id, window.innerWidth < 768)}
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
            
            {/* Button visible on hover for desktop, and when clicked on mobile */}
            <motion.div
              className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                window.innerWidth >= 768 
                  ? "opacity-0 group-hover:opacity-100" 
                  : activeProject === project.id ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: window.innerWidth >= 768 ? 0 : activeProject === project.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <button 
                className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Viewing project ${project.id}`);
                }}
              >
                View Project
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;