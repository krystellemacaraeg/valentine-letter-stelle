import React from 'react';
import { motion } from 'framer-motion';
import './InitialScreen.css';
import cuteCat from '../assets/gifs/cute-cat.gif';

const InitialScreen = ({ onAccept, onReject }) => {
  return (
    <motion.div 
      className="initial-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1 
        className="greeting"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hi, Baby!
      </motion.h1>
      
      <motion.p 
        className="question"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Would you like to see your gift?
      </motion.p>

      <motion.div 
        className="cat-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <img src={cuteCat} alt="Cute cat" className="cat-gif" />
      </motion.div>

      <motion.div 
        className="button-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button className="btn-reject" onClick={onReject}>✗</button>
        <button className="btn-accept" onClick={onAccept}>✓</button>
      </motion.div>
    </motion.div>
  );
};

export default InitialScreen;