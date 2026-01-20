import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './MainScreen.css';
import catFlowers from '../assets/gifs/cat-flowers.gif';
import cassetteImg from '../assets/images/cassette.png';
import envelopeImg from '../assets/images/envelope.png';
import vinylImg from '../assets/images/vinyl.png';
import videoFile from '../assets/media/video.mp4';

const MainScreen = ({ onOpenLetter, isPlaying, onVinylClick }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleCassetteClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <motion.div 
      className="main-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1 
        className="flowers-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Flowers for you!
      </motion.h1>

      <motion.div 
        className="flowers-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
      >
        <img src={catFlowers} alt="Cat with flowers" className="cat-flowers-gif" />
      </motion.div>

      <motion.div 
        className="interactive-elements"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div 
          className="element cassette"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCassetteClick}
        >
          <img src={cassetteImg} alt="Cassette tape" />
        </motion.div>

        <motion.div 
          className="element envelope"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenLetter}
        >
          <img src={envelopeImg} alt="Envelope" />
        </motion.div>

        <motion.div 
          className="element vinyl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onVinylClick}
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { duration: 2, repeat: Infinity, ease: "linear" } : {}}
        >
          <img src={vinylImg} alt="Vinyl record" />
        </motion.div>
      </motion.div>

      <motion.p 
        className="instruction-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Please play the vinyl as you read the letter inside the envelope.
      </motion.p>

      {/* Video Modal */}
      {showVideo && (
        <motion.div 
          className="video-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseVideo}
        >
          <motion.div 
            className="video-container"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-video" onClick={handleCloseVideo}>✕</button>
            <video controls autoPlay className="video-player">
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MainScreen;