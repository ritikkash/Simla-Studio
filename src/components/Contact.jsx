import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/company/simlastudios" },
    { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/simlastudios/" },
    { icon: <FaYoutube size={20} />, url: "https://www.youtube.com/@CNCSimla_Studios" },
    { icon: <FaFacebook size={20} />, url: "https://facebook.com/yourpage" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-wider text-purple-400 mb-2"
          >
            CONTACT US
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            HAVE ANY QUESTION?
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center space-y-4 mb-8"
          >
            <a href="tel:+917018674749" className="flex items-center text-lg hover:text-purple-400 transition-colors">
              <FaPhone className="mr-3 text-purple-500" />
              +91 7018674749
            </a>
            
            <a href="mailto:contact@simlastudios.com" className="flex items-center text-lg hover:text-purple-400 transition-colors">
              <FaEnvelope className="mr-3 text-purple-500" />
              contact@simlastudios.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} Simla Studios. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;