import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/TabletDisplay.css";
import HomePage from "./pages/HomePage.jsx";
import FrontendPage from "./pages/FrontendPage.jsx";
import UIPage from "./pages/UIPage.jsx";
import LoaderScreen from "./LoaderScreen.jsx";
import GenericPage from "./pages/GenericPage.jsx";


const TabletDisplay = ({ selectedProject }) => {
  const [screenContent, setScreenContent] = useState("📱 Select a project from the navbar");
  const tabletControls = useAnimation();
  const touchRippleRef = useRef(null);

  let touchStartX = 0;
  let mouseDown = false;
  let mouseStartX = 0;

  // Trigger Power-Up Animation when selectedProject changes
  useEffect(() => {
    handlePowerUp();
  }, [selectedProject]); // Run this whenever selectedProject updates

  const handlePowerUp = async () => {
    if (!selectedProject) {
      setScreenContent(<HomePage />);
      return;
    }
  
    if (selectedProject == "exit") {
      setScreenContent("🔌 Powering Off...");
      await tabletControls.start({ opacity: 0.8, transition: { duration: 1 } });
  
      setTimeout(() => {
        setScreenContent("💤 Switch ON the power button");
      }, 1000);
      return;
    }
  
  // Powering Up Animation
  setScreenContent(<LoaderScreen />);
  await tabletControls.start({ opacity: 1, transition: { duration: 1 } });

  setTimeout(() => {
    let content;
    switch (selectedProject.toLowerCase()) {
        case "frontend":
            setScreenContent(
              <div className="fade-out">
                <GenericPage project={"frontend"} />
              </div>
            );
    
            setTimeout(() => {
              setScreenContent(
                <div className="fade-in">
                  <FrontendPage />
                </div>
              );
            }, 500);
            break;
    
        case "ui":
            setScreenContent(
              <div className="fade-out">
                <GenericPage project={"ui"} />
              </div>
            );
    
            setTimeout(() => {
              setScreenContent(
                <div className="fade-in">
                  <UIPage />
                </div>
              );
            }, 500);
            break;
      default:
        content = <HomePage />;
    }

    setScreenContent(content);
    tabletControls.start({ scale: 1, transition: { duration: 0.5 } });
  }, 1000);
};

  // Handle Click / Tap Effect (Ripple)
  const handleTap = (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("touch-ripple");

    const rect = touchRippleRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;

    touchRippleRef.current.appendChild(ripple);

    setTimeout(() => ripple.remove(), 500);
  };

  // Handle Swipe Gestures
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const deltaX = e.touches[0].clientX - touchStartX;
    handleSwipe(deltaX);
  };

  const handleMouseDown = (e) => {
    mouseDown = true;
    mouseStartX = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!mouseDown) return;
    const deltaX = e.clientX - mouseStartX;
    handleSwipe(deltaX);
  };

  const handleMouseUp = () => {
    mouseDown = false;
  };


  return (
    <div className="tablet-container">
      <motion.div 
        className="tablet-frame"
        ref={touchRippleRef}
        animate={tabletControls}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <motion.div 
          className="tablet-screen"
          onClick={handleTap}
          animate={tabletControls}
        >
            <div className="screen-content">{screenContent}</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TabletDisplay;