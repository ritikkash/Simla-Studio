import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    quote: "WorkingGashwa Studio was an absolute game-changer for our project. Their attention to detail, creativity, and technical skills took our raw footage and transformed it into a captivating story. They truly understood our vision and added a level of professionalism and polish that exceeded our expectations. Their ability to communicate and collaborate made the entire process seamless and enjoyable. We highly recommend Gashwa Studio for anyone seeking a talented and dedicated video editor.",
    author: "Global Rashid",
    role: "Client"
  },
  {
    id: 2,
    quote: "Vikrant is a talented and versatile video editor and filmmaker. They have a keen eye for aesthetics and a gift for crafting visually compelling stories. Their professionalism, creativity, and dedication are unmatched. In our Documentary film he did a really great job.",
    author: "Silver Oak Farm",
    role: "Client"
  },
  {
    id: 3,
    quote: "From the moment we started working with Gashwa Studio, we knew we were in good hands. Their attention to detail, creative approach, and commitment to excellence made the entire editing process a breeze. They seamlessly merged our vision with their technical expertise, resulting in a final product that exceeded our expectations. Gashwa Studio has a knack for pacing and storytelling that brought our video to life, leaving a lasting impact.",
    author: "Client Name",
    role: "Client"
  }
];

const TestimonialCard = ({ testimonial, isActive, onClick }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`p-8 rounded-xl transition-all duration-300 ${isActive ? "bg-gray-800 shadow-lg" : "bg-gray-800/50"}`}
      onClick={onClick}
    >
      <div className="flex items-start mb-6">
        <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.quote}"</p>
      <div className="border-t border-gray-700 pt-4">
        <p className="text-white font-semibold">{testimonial.author}</p>
        <p className="text-purple-400 text-sm">{testimonial.role}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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
          <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-2">
            TESTIMONIALS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            WHAT CLIENTS SAYS
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what satisfied clients have to say about the extraordinary impact of my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={activeTestimonial === index}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>

        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index ? 'bg-purple-500 w-6' : 'bg-gray-600'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;