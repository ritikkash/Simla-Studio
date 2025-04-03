import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { useInView } from "react-intersection-observer";
import logo from "../assets/simla.png"; 

const About = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  // Animation controls
  const titleControls = useAnimation();
  const imageControls = useAnimation();
  const contentControls = useAnimation();
  const skillsControls = useAnimation();
  const buttonControls = useAnimation();

  // Intersection observers
  const [titleRef, titleInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [buttonRef, buttonInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Trigger animations when elements come into view
  useEffect(() => {
    if (titleInView) titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.7 } });
    if (imageInView) imageControls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    if (contentInView) contentControls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    if (skillsInView) skillsControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    if (buttonInView) buttonControls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } });
  }, [titleInView, imageInView, contentInView, skillsInView, buttonInView]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div
      style={{
        padding: isMobile ? "2rem 1rem" : "4rem 2.5rem",
        background: "linear-gradient(to bottom, #1f2937, #111827)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {/* Section Title */}
        <motion.div ref={titleRef} initial={{ opacity: 0, y: -30 }} animate={titleControls} style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ color: "#9333ea", fontSize: "1.5rem", fontWeight: "600" }}>About Me</h2>
          <h3 style={{ color: "white", fontSize: isMobile ? "2rem" : "2.5rem", fontWeight: "700" }}>Learn more about Simla Studios</h3>
          <div style={{ width: "60px", height: "4px", backgroundColor: "#9333ea", margin: "0 auto" }} />
        </motion.div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "2rem" : "4rem", alignItems: "center" }}>
          {/* Image */}
          <motion.div ref={imageRef} initial={{ opacity: 0, x: -50 }} animate={imageControls} style={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="Simla Studios" style={{ maxWidth: isMobile ? "80%" : "100%", borderRadius: "10px", border: "4px solid #4b5563" }} />
          </motion.div>

          {/* Text Content */}
          <div style={{ flex: "1", color: "white" }}>
            <motion.div ref={contentRef} initial={{ opacity: 0, x: 50 }} animate={contentControls}>
              <h4 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#f3f4f6" }}>Your Vision, Our Expertise</h4>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#d1d5db", marginBottom: "1.5rem" }}>
                At Simla Studios, we transform ordinary footage into extraordinary stories. With over 10 years of experience in film and video production, we specialize in creating visually stunning content.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#d1d5db", marginBottom: "2rem" }}>
                Whether you need professional videography services, expert video editing, or complete production management, our team combines technical skill with creative vision to exceed your expectations.
              </p>
            </motion.div>

            {/* CTA Button with smooth color transition */}
            <motion.div ref={buttonRef} initial={{ opacity: 0, y: 20 }} animate={buttonControls}>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "2px solid #9333ea",
                  borderRadius: "999px",
                  padding: "0.8rem 2rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background-color 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#9333ea";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "white";
                }}
                onClick={() => scrollToSection("portfolio")}
              >
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
