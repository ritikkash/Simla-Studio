import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Filmmaking and Video Production",
    icon: "🎬",
    description: "Comprehensive video production services from concept development to final execution. Specializing in short films, documentaries, music videos, promotional and corporate content.",
    color: "from-purple-600 to-indigo-600",
  },
  {
    title: "Video Editing",
    icon: "✂️",
    description: "Professional editing services including trimming, transitions, effects, and sound design. Focused on seamless storytelling and polished final products with strong visual aesthetics.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Color Grading",
    icon: "🎨",
    description: "Advanced color grading to transform your footage's mood and impact. Adjusting color balance, contrast, and creating specific styles for cohesive, visually appealing results.",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Sound Design",
    icon: "🔊",
    description: "Immersive audio experiences with careful selection of music, dialogue, and effects. Precise mixing and mastering for pristine sound quality and impactful sonic dimension.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Motion Graphics",
    icon: "🔄",
    description: "Dynamic motion graphics including titles, animated logos, and infographics. Professional animated visuals to elevate production value and message effectiveness.",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Graphic Design",
    icon: "🖌️",
    description: "Eye-catching posters, brochures, logos, and branding materials. Creative visual identity aligned with your project vision and brand communication.",
    color: "from-violet-500 to-fuchsia-500",
  },
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.15)",
      }}
      className="relative bg-gradient-to-r p-0.5 rounded-xl shadow-lg h-full transition-all duration-300"
    >
      {/* Gradient Border Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl`}
      />
      {/* Content Container */}
      <div className="relative bg-gray-900 rounded-xl p-6 flex flex-col flex-grow transition-all duration-300">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-300">{service.description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-gray-900 min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
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
