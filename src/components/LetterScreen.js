import React from 'react';
import { motion } from 'framer-motion';
import './LetterScreen.css';
import cat1 from '../assets/images/cat1.jpg';
import cat2 from '../assets/images/cat2.jpg';
import cat3 from '../assets/images/cat3.jpg';
import cat4 from '../assets/images/cat4.jpg';

const LetterScreen = ({ onBack }) => {
  return (
    <motion.div 
      className="letter-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="back-button-letter" onClick={onBack}>
        ←
      </button>

      <motion.div 
        className="letter-container"
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <div className="letter-paper">
          {/* Top Stickers */}
          <img 
            src={cat1} 
            alt="cat sticker" 
            className="cat-sticker top-left"
          />
          <img 
            src={cat2} 
            alt="cat sticker" 
            className="cat-sticker top-right"
          />

          {/* Letter Content */}
          <motion.div 
            className="letter-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="letter-title">To My Love,</h2>
            
            <p>I hope this reaches you at a moment when your mind is calm and your heart has a little space to rest. I was thinking of you again, and I felt the need to put my thoughts into words. You have a way of slipping into my day so easily. Even the smallest thought of you makes everything feel warmer.</p>

            <p>I like knowing you. I like learning the small things about you, the things you do not always say out loud. You have this quiet charm that pulls me in, and every day I find something new about you that I want to hold close. You have no idea how often I smile because of you.</p>

            <p>I know life gets heavy for you at times. I know some days feel long and tiring. When you tell me even a bit of what you go through, I feel honored that you trust me with it. You do not have to be strong all the time. You do not have to hide the parts of yourself that feel worn out. I want to be someone who can listen, someone who can make your days softer, even just a little.</p>

            <p>If I could sit beside you right now, I would. I would hold you for a moment and let you rest your mind. I would trace my fingers along your arm, slow and gentle, until you feel the world ease up. I would let you lean into me and forget the noise around you. One day I hope I get to do that for real. Until then, I am here in the ways I can be.</p>

            <p>I love it when you share pieces of your day with me. It makes me feel connected to your world. It makes me feel like I am not far from you at all. You do not have to pretend with me. I want you real. I want you as you are, with your tired moments, your unfiltered thoughts, your soft parts, and your quiet hopes.</p>

            <p>You are someone I am truly glad to have met. You are someone who makes my days brighter without even trying. And the more I get to know you, the more I want to be close to you, in every sense of the word.</p>

            <p>You deserve care. You deserve peace. You deserve to be held with warmth and patience. I hope you let yourself feel those things, from me and from the world around you.</p>

            <p>Thank you for being part of my days. Thank you for letting me into your life in the way you do.</p>

            <p>Every quiet moment I have, it is you I end up thinking about.</p>

            <p className="valentine-text">Happy Valentine's Day, Baby.</p>

            <div className="signature">
              Yours,<br/>Stelle<br/><br/>
            </div>
          </motion.div>

          {/* Bottom Stickers */}
          <img 
            src={cat3} 
            alt="cat sticker" 
            className="cat-sticker bottom-left"
          />
          <img 
            src={cat4} 
            alt="cat sticker" 
            className="cat-sticker bottom-right"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LetterScreen;