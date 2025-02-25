"use client";

import { motion } from 'framer-motion';

export const SlowdiveLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'none', stroke: 'white', strokeWidth: 1.5 }}>
        <motion.path
          d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path 
          d="M12 7v10M9 10l3-3 3 3M9 14l3 3 3-3" 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>
      <motion.h1
        style={{ 
          fontSize: '22px',
          fontWeight: 'bold',
          margin: 0,
          letterSpacing: '1px',
          background: 'linear-gradient(90deg, #FFF 0%, #bbc 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        SLOWDIVE
      </motion.h1>
    </motion.div>
  );
}; 