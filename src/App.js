import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import InitialScreen from './components/InitialScreen';
import RejectionScreen from './components/RejectionScreen';
import MainScreen from './components/MainScreen';
import LetterScreen from './components/LetterScreen';
import songFile from './assets/media/song.mp3';

function App() {
  const [screen, setScreen] = useState('initial');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(songFile));

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
  React.useEffect(() => {
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
          />
        )}

        {screen === 'letter' && (
          <LetterScreen 
            key="letter"
            onBack={handleBackToMain}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;