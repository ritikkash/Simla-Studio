import React, { memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Optimized imports
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.jpg";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.jpg";

const clientLogos = [
  { src: logo1, alt: "Client 1" },
  { src: logo2, alt: "Client 2" },
  { src: logo3, alt: "Client 3" },
  { src: logo4, alt: "Client 4" },
  { src: logo5, alt: "Client 5" },
  { src: logo6, alt: "Client 6" },
  { src: logo7, alt: "Client 7" },
  { src: logo8, alt: "Client 8" },
  { src: logo9, alt: "Client 9" },
];

// Memoized error handler to prevent recreation on each render
const handleImageError = (logo) => (e) => {
  console.error(`Failed to load image: ${logo.src}`);
  e.target.src = "https://via.placeholder.com/200x100?text=Logo+Missing";
  e.target.className = "max-h-20 object-contain w-full opacity-50";
};

// Optimized function to get centering classes
const getCenteringClasses = (isLast, totalItems) => {
  if (!isLast) return '';
  
  const classes = [];
  
  // Desktop centering (4 columns)
  if (totalItems % 4 === 1) {
    classes.push('md:col-start-2 md:col-span-2');
  }
  
  // Tablet centering (3 columns) 
  if (totalItems % 3 === 1) {
    classes.push('sm:col-start-2');
  }
  
  // Mobile centering (2 columns)
  if (totalItems % 2 === 1) {
    classes.push('col-span-2 justify-self-center');
  }
  
  return classes.join(' ');
};

// Memoized ClientLogo component
const ClientLogo = memo(({ logo, index, isLast, totalItems }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const centeringClasses = getCenteringClasses(isLast, totalItems);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center justify-center p-6 bg-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-300 ${centeringClasses}`}
    >
      <img 
        src={logo.src} 
        alt={logo.alt} 
        className="max-h-20 object-contain w-full"
        onError={handleImageError(logo)}
        loading="lazy"
      />
    </motion.div>
  );
});

ClientLogo.displayName = 'ClientLogo';

const ClientsShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const totalLogos = clientLogos.length;

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
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {clientLogos.map((logo, index) => (
            <ClientLogo 
              key={`client-${index}`}
              logo={logo} 
              index={index}
              isLast={index === totalLogos - 1}
              totalItems={totalLogos}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;