"use client"
import React from "react";
import { motion } from "framer-motion";


const Animated = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      
    >
      {children}
    </motion.div>
  );
};

export default Animated;
