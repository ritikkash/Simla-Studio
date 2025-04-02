import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Option 1: Using direct imports (recommended)
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.jpg";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";

const clientLogos = [
  { src: logo1, alt: "Client 1" },
  { src: logo2, alt: "Client 2" },
  { src: logo3, alt: "Client 3" },
  { src: logo4, alt: "Client 4" },
  { src: logo5, alt: "Client 5" },
  { src: logo6, alt: "Client 6" },
  { src: logo7, alt: "Client 7" },
  { src: logo8, alt: "Client 8" },

];

// Option 2: Using public folder paths (alternative)
// const clientLogos = [
//   { src: process.env.PUBLIC_URL + "/assets/projects/logo1.png", alt: "Client 1" },
//   { src: process.env.PUBLIC_URL + "/assets/projects/logo2.png", alt: "Client 2" },
//   // ... other logos
// ];

const ClientLogo = ({ logo, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center justify-center p-6 bg-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-300"
    >
      <img 
        src={logo.src} 
        alt={logo.alt} 
        className="max-h-20 object-contain w-full"
        onError={(e) => {
          console.error(`Failed to load image: ${logo.src}`);
          e.target.src = "https://via.placeholder.com/200x100?text=Logo+Missing";
          e.target.className = "max-h-20 object-contain w-full opacity-50";
        }}
      />
    </motion.div>
  );
};

const ClientsShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Debugging: Log the image paths
  React.useEffect(() => {
    console.log("Client logos:", clientLogos.map(logo => logo.src));
  }, []);

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Clients I've Worked With
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {clientLogos.map((logo, index) => (
            <ClientLogo key={index} logo={logo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;