import React, { useState } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/simla.png";

const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isSmallMobile = useMediaQuery("(max-width: 600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/Home" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Testimonial", path: "/testimonials" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <AppBar
      // position="fixed"
      style={{
        background: "linear-gradient(to right, #1f2937, #000000, #1f2937)",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        padding: isSmallMobile ? "0 1rem" : "0 2.5rem",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: isSmallMobile ? "4rem" : "5rem",
          minHeight: isSmallMobile ? "4rem" : "5rem", // Override Material UI's default minHeight
        }}
      >
        {/* Logo Section - Click to Go Home */}
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")}
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
              <span
                key={item.name}
                onClick={() => navigate(item.path)}
                style={{ color: "white", cursor: "pointer" }}
                onMouseOver={(e) => (e.target.style.color = "#9ca3af")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                {item.name}
              </span>
            ))}
          </motion.div>
        ) : (
          <IconButton
            onClick={() => setDrawerOpen(true)}
            style={{ 
              color: "white",
              padding: isSmallMobile ? "4px" : "8px" 
            }}
          >
            <MenuIcon 
              fontSize={isSmallMobile ? "medium" : "large"} 
            />
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
              onClick={() => navigate("/contact")}
            >
              Get in Touch
              <ArrowForwardIcon style={{ color: "white" }} />
            </Button>
          </motion.div>
        )}
      </Toolbar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div
          style={{
            width: isSmallMobile ? "220px" : "250px",
            backgroundColor: "#1f2937",
            height: "100vh",
            padding: "1rem",
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
          <Divider
            style={{ backgroundColor: "#ffffff50", marginBottom: "1rem" }}
          />
          <List>
            {navLinks.map((item) => (
              <ListItem
                button
                key={item.name}
                onClick={() => {
                  setDrawerOpen(false);
                  navigate(item.path);
                }}
              >
                <ListItemText
                  primary={item.name}
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: isSmallMobile ? "1rem" : "1.2rem",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;