import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/simla.png";

// Custom animated hamburger icon component
const HamburgerIcon = ({ isOpen }) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="flex flex-col space-y-1.5 w-6"
    >
      <motion.span
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 7 },
        }}
        className="w-full h-0.5 bg-white"
      />
      <motion.span
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        className="w-full h-0.5 bg-white"
      />
      <motion.span
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -7 },
        }}
        className="w-full h-0.5 bg-white"
      />
    </motion.div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isSmallMobile = useMediaQuery("(max-width: 600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonial", id: "testimonials" },
    { name: "Contact Me", id: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
      setDrawerOpen(false);
    }
  };

  const openGmail = () => {
    window.location.href = "mailto:vikrantgashwabusiness@gmail.com?subject=Inquiry%20from%20Website";
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        background: "linear-gradient(to right, #1f2937, #000000, #1f2937)",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        padding: isSmallMobile ? "0 1rem" : "0 2.5rem",
        zIndex: 1000,
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: isSmallMobile ? "4rem" : "5rem",
          minHeight: isSmallMobile ? "4rem" : "5rem",
        }}
      >
        {/* Logo Section */}
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("home");
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ 
              width: isSmallMobile ? "5rem" : "7rem", 
              height: "auto", 
              objectFit: "contain" 
            }}
          />
        </div>

        {/* Desktop Navigation Links */}
        {!isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              gap: "2rem",
              color: "white",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            {navLinks.map((item) => (
              <motion.span
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ 
                  color: activeSection === item.id ? "#9333ea" : "white",
                  cursor: "pointer",
                }}
                whileHover={{ 
                  color: "#9333ea",
                  y: -2 
                }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>
            ))}
          </motion.div>
        ) : (
          <IconButton
            onClick={() => setDrawerOpen(!drawerOpen)}
            style={{ 
              color: "white",
              padding: isSmallMobile ? "4px" : "8px" 
            }}
          >
            <HamburgerIcon isOpen={drawerOpen} />
          </IconButton>
        )}

        {/* "Get in Touch" Button */}
        {!isMobile && (
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#9333ea",
                color: "white",
                borderRadius: "999px",
                padding: "0.8rem 1.5rem",
                fontSize: "1rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
              onClick={openGmail}
            >
              Get in Touch
              <ArrowForwardIcon style={{ color: "white" }} />
            </Button>
          </motion.div>
        )}
      </Toolbar>

      {/* Animated Mobile Drawer Menu */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: isSmallMobile ? '85%' : '65%',
              height: '100vh',
              backgroundColor: '#1f2937',
              zIndex: 1100,
              padding: '1rem',
              boxShadow: '-5px 0 15px rgba(0,0,0,0.3)',
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                onClick={() => setDrawerOpen(false)}
                style={{ 
                  color: "white",
                  padding: isSmallMobile ? "4px" : "8px"
                }}
              >
                <CloseIcon fontSize={isSmallMobile ? "medium" : "large"} />
              </IconButton>
            </div>
            
            <Divider style={{ backgroundColor: "#ffffff50", marginBottom: "1rem" }} />
            
            <List>
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ListItem
                    button
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      backgroundColor: activeSection === item.id ? "#9333ea30" : "transparent",
                      borderRadius: '8px',
                      marginBottom: '4px',
                    }}
                  >
                    <ListItemText
                      primary={item.name}
                      style={{
                        color: activeSection === item.id ? "#9333ea" : "white",
                        fontSize: isSmallMobile ? "1rem" : "1.2rem",
                      }}
                    />
                  </ListItem>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <ListItem
                  button
                  onClick={openGmail}
                  style={{
                    backgroundColor: "#9333ea30",
                    borderRadius: '8px',
                    marginTop: '1rem',
                  }}
                >
                  <ListItemText
                    primary="Get in Touch"
                    style={{
                      color: "#9333ea",
                      fontWeight: "bold",
                      fontSize: isSmallMobile ? "1rem" : "1.2rem",
                    }}
                  />
                </ListItem>
              </motion.div>
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </AppBar>
  );
};

export default Navbar;