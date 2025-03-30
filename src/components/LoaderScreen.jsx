import { motion } from "framer-motion";
import "./styles/LoaderScreen.css";

const LoaderScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="loading-bar"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        // onAnimationComplete={onComplete} 
      />
      <p>Loading </p>
    </motion.div>
  );
};

export default LoaderScreen;
