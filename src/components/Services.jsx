import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/services/Music_videos.jpg"
import image2 from "../assets/services/image2.jpg"
import image3 from "../assets/services/Short-form-Videos.png"
import image4 from "../assets/services/image4.jpg"
import image5 from "../assets/services/Real-Estate-Video’s.png"
import image6 from "../assets/services/Corporate Shoots.png"
import image7 from "../assets/services/Wedding.png"
import image8 from "../assets/services/Pre-Wedding.png"
import image9 from "../assets/services/Graphic Design.png"





const services = [
  {
    title: "Music Videos",
    icon: "🎬",
    description: "Shoot & Edit",
    color: "from-purple-600 to-indigo-600",
    imageUrl: image1,
  },
  {
    title: "Youtube Video's",
    icon: "✂️",
    description: "Shoot & Edit",
    color: "from-pink-500 to-red-500",
    imageUrl: image2,
  },
  {
    title: "Short-form Videos",
    icon: "🎨",
    description: "Shoot & Edit",
    color: "from-amber-500 to-orange-500",
    imageUrl: image3,
  },
  {
    title: "Documentaries",
    icon: "🔊",
    description: "Shoot & Edit",
    color: "from-gray-400 to-gray-200",
    imageUrl: image4,
  },
  {
    title: "Real Estate Video's",
    icon: "🔄",
    description: "Shoot & Edit",
    color: "from-blue-300 to-blue-600",
    imageUrl: image5,
  },
  {
    title: "CORPORATE Shoots",
    icon: "🖌️",
    description: "Shoot & Edit",
    color: "from-red-500 to-fuchsia-500",
    imageUrl: image6,
  },
  {
    title: "Wedding",
    icon: "💍",
    description: "Only Edit",
    color: "from-purple-600 to-indigo-600",
    imageUrl: image7,
  },
  {
    title: "Pre-Wedding",
    icon: "❤️",
    description: "Shoot & Edit",
    color: "from-pink-500 to-red-500",
    imageUrl: image8,
  },
  {
    title: "Graphic Design",
    icon: "📐",
    description: "",
    color: "from-amber-500 to-orange-500",
    imageUrl: image9,
  },
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.1, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.15)",
      }}
      className="relative bg-white rounded-xl shadow-lg h-full flex flex-col overflow-hidden transition-all duration-300 p-2"
    >
      {/* Thumbnail */}
      <div className="w-full overflow-hidden rounded-t-xl aspect-w-16 aspect-h-11">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="p-2 flex flex-col flex-grow">
        {/* Title, Description, and Button Container */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col mr-2">
            {/* Title and Description */}
            <h3 className="text-base font-bold text-gray-900 mb-1">{service.title}</h3>
            <p className="text-gray-600 text-xs">{service.description}</p>
          </div>
          {/* Get a Quote Button */}
          <button
            className={
              `py-3 px-4 rounded-full text-white font-semibold text-xs bg-purple-700 hover:opacity-90 transition-opacity flex-shrink-0`
            }
            onClick={() => {
              window.open(
                'https://mail.google.com/mail/?view=cm&fs=1&to=vikrantgashwabusiness@gmail.com&su=Service%20Inquiry%20-%20' + encodeURIComponent(service.title),
                '_blank'
              );
            }}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-gray-900 min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[80%] mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0. }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-2">
            Services
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Services We Offer
          </h3>
          <div className="mt-4 h-1 w-20 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 h-full">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
