import React from 'react';
import { motion } from 'framer-motion';
import './RejectionScreen.css';
import beggingCat from '../assets/gifs/begging-cat.gif';

const RejectionScreen = ({ onBack }) => {
  return (
    <motion.div 
      className="rejection-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="plea-text"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Aww, please?
      </motion.h2>
      
      <motion.p 
        className="plea-subtext"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I prepared this gift for you
      </motion.p>

      <motion.div 
        className="cat-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <img src={beggingCat} alt="Begging cat" className="cat-gif" />
      </motion.div>

      <motion.button 
        className="back-button"
        onClick={onBack}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ←
      </motion.button>
    </motion.div>
  );
};

export default RejectionScreen;