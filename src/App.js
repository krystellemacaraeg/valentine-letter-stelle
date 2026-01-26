import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import InitialScreen from './components/InitialScreen';
import RejectionScreen from './components/RejectionScreen';
import MainScreen from './components/MainScreen';
import LetterScreen from './components/LetterScreen';
import songFile from './assets/media/song.mp3';

function App() {
  // Load screen state from localStorage, default to 'initial'
  const [screen, setScreen] = useState(() => {
    return localStorage.getItem('currentScreen') || 'initial';
  });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(songFile));

  // Save screen state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentScreen', screen);
  }, [screen]);

  const handleAccept = () => {
    setScreen('main');
  };

  const handleReject = () => {
    setScreen('rejection');
  };

  const handleBack = () => {
    setScreen('initial');
  };

  const handleOpenLetter = () => {
    setScreen('letter');
  };

  const handleBackToMain = () => {
    setScreen('main');
  };

  const handleVinylClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Cleanup audio on unmount
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {screen === 'initial' && (
          <InitialScreen 
            key="initial"
            onAccept={handleAccept}
            onReject={handleReject}
          />
        )}
        
        {screen === 'rejection' && (
          <RejectionScreen 
            key="rejection"
            onBack={handleBack}
          />
        )}

        {screen === 'main' && (
          <MainScreen 
            key="main"
            onOpenLetter={handleOpenLetter}
            isPlaying={isPlaying}
            onVinylClick={handleVinylClick}
            onBackToInitial={handleBack}
          />
        )}

        {screen === 'letter' && (
          <LetterScreen 
            key="letter"
            onBack={handleBackToMain}
            onBackToInitial={handleBack}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;