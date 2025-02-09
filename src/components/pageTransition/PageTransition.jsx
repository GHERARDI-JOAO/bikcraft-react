// components/PageTransition.jsx
import React from "react";
import { motion } from "framer-motion";

export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.3, 0, 0.1, 1], // Smooth easing function
        opacity: { duration: 0.15 }, // Fade in slightly faster
      }}
    >
      {children}
    </motion.div>
  );
}
