import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/services/Documentary Portfolio.png"
import image2 from "../assets/services/Corporate Ads.png"
import image3 from "../assets/services/Youtube-portfolio.png"
import image4 from "../assets/services/Short form Portfolio.png"
import image5 from "../assets/services/Wedding Portfolio.png"
import image6 from "../assets/services/Realestate Portfolio.png"

const projects = [
  { 
    id: 1, 
    image: image1, 
    title: "Documentary Film",
    link: "https://youtube.com/playlist?list=PLG8OsIBM5F-4G87dLuTRY0QkGwXmq8Jap&si=gQ4_oho4wCzKW626",
 
  },
  { 
    id: 2, 
    image: image2, 
    title: "Corporate Ads",
    link: "https://youtube.com/playlist?list=PLG8OsIBM5F-40NbZnkxnFaa4X0OT-eaw9&si=pgjJS-qtVIT3ARGG "
  },
  { 
    id: 3, 
    image: image3, 
    title: "YouTube Videos",
    link: "https://youtube.com/playlist?list=PLG8OsIBM5F-79np7BdPQMbaDNbpfwDLo6&si=bJ8Ij0C2ZFv8AShb"
  },
  { 
    id: 4, 
    image: image4, 
    title: "Reels and Shorts",
    link: "https://youtu.be/o9QGYmfIMKU"
  },
  { 
    id: 5, 
    image: image5,
    title: "Wedding Videos",
    link: "https://youtube.com/playlist?list=PLG8OsIBM5F-4LTF6pGcIY3DRDirTb9-Mz&si=omQhADhnVR7xA5NQ "
  },
  { 
    id: 6, 
    image: image6, 
    title: "Real Estate",
    link: "https://youtube.com/playlist?list=PLG8OsIBM5F-5VP8SR1BmZ3X5Uobnm6Tyb&si=YsEDXsg8bgUwz4pf"
  },
];

const getPlaylistId = (url) => {
  const match = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

const PlaylistOverlay = ({ playlistId, onClose, title, link }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl mx-4 sm:mx-auto p-0 sm:p-4 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 animate-slideUp">
        <button
          className="absolute top-3 right-3 text-white text-3xl bg-purple-600 bg-opacity-80 rounded-full px-3 py-1 shadow-lg hover:bg-purple-800 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center mt-8 mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">{title}</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-300 text-sm">Click</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-purple-400 hover:text-purple-300 underline font-semibold">
              YouTube
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-8 8a1 1 0 01-.707.293H5a1 1 0 01-1-1v-4a1 1 0 01.293-.707l8-8zM5 15h2.586l8-8L13 3.414l-8 8V15z"></path></svg>
            </a>
            <span className="text-gray-300 text-sm">to see the playlist or click the forward icon</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className="ml-2 text-purple-400 hover:text-purple-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.172 12l-4.95-4.95a1 1 0 111.414-1.414l6.364 6.364a1 1 0 010 1.414l-6.364 6.364a1 1 0 11-1.414-1.414L13.172 12z"/></svg>
            </a>
          </div>
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed?listType=playlist&list=${playlistId}&autoplay=1&rel=0`}
              title="YouTube Playlist"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-xl border-2 border-purple-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, onPlay }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.1, delay: index * 0.1 }}
      className="relative bg-white rounded-xl shadow-lg h-full flex flex-col overflow-hidden transition-all duration-500 ease-in-out p-2"
      onClick={() => onPlay(project)}
      style={{ cursor: "pointer" }}
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
  const [overlayData, setOverlayData] = useState(null); // {playlistId, title, link}

  const handlePlay = (project) => {
    const playlistId = getPlaylistId(project.link);
    if (playlistId) {
      setOverlayData({ playlistId, title: project.title, link: project.link });
    } else {
      window.open(project.link, "_blank");
    }
  };

  return (
    <section className="bg-gray-900 min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      {overlayData && (
        <PlaylistOverlay
          playlistId={overlayData.playlistId}
          title={overlayData.title}
          link={overlayData.link}
          onClose={() => setOverlayData(null)}
        />
      )}
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
            <ProjectCard key={project.id} project={project} index={index} onPlay={handlePlay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;