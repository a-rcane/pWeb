import React from "react";
import { motion } from "framer-motion";
import "../styles/FrontendPage.css";

const FrontendPage = () => {
  return (
    <motion.div 
      className="frontend-page"
      drag="y" // Enables vertical dragging
      dragConstraints={{ top: -500, bottom: 0 }} // Limits the scroll area
    >
      <h2>Frontend Projects</h2>
      <div className="project">🚀 Project 1 - Landing Page</div>
      <div className="project">🎨 Project 2 - UI Components</div>
      <div className="project">💻 Project 3 - Dashboard UI</div>
      <div className="project">📱 Project 4 - Mobile Responsive App</div>
      <div className="project">🛍️ Project 5 - E-commerce Website</div>
      <div className="project">📊 Project 6 - Data Visualization</div>
    </motion.div>
  );
};

export default FrontendPage;
