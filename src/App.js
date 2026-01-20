import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import InitialScreen from './components/InitialScreen';
import RejectionScreen from './components/RejectionScreen';
import MainScreen from './components/MainScreen';
import LetterScreen from './components/LetterScreen';

function App() {
  const [screen, setScreen] = useState('initial');

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