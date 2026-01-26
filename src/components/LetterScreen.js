import React from 'react';
import { motion } from 'framer-motion';
import './LetterScreen.css';
import cat1 from '../assets/images/cat1.jpg';
import cat2 from '../assets/images/cat2.jpg';
import cat3 from '../assets/images/cat3.jpg';
import cat4 from '../assets/images/cat4.jpg';

const LetterScreen = ({ onBack, onBackToInitial }) => {
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

      <button className="home-button-letter" onClick={onBackToInitial}>
        🏠
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
            
            <p>I hope you read this at a moment when your mind is calm enough to handle the truth, which is that you have been living rent-free in my thoughts all day again. I was going through my day like a normal, responsible human being, (BAHAHAHAH) then you wandered into my thoughts and refused to leave. You really have no idea how easily you do that to me. It feels like it should be illegal.</p>

            <p>I like knowing you. Every small thing you reveal, especially the ones you do not say out loud, pulls me in even more. There is something about you that keeps me curious and wanting to learn all the parts you do not show to everyone. You make me smile so often it is almost unfair how easily you get to me. </p>

            <p>I know your days can feel heavy. I know the long hours and the pressure weigh on you. Whenever you share even a glimpse of what you are carrying, I feel lucky that you trust me with it. You never have to pretend with me. You never have to force that strength you show the world. I want the real you, even the tired parts, even the parts you think you should hide. They are still you, and I want every single piece.</p>

            <p>And if I could be with you right now, I would walk straight up to you and pull you against me, just close enough for you to feel every bit of attention I have on you. I would brush my fingers along your arm, slow and deliberate, just to see the exact moment your breath softens. I would lean in, let my lips hover near yours for a second longer than necessary, and kiss you gently, the kind of kiss that tells you to forget everything else for a moment and focus only on me. I would let you rest your forehead against mine, let you feel how steady I am for you, and let the world fall away until it is just the two of us in that quiet space. (Yes, I read a lot of fanfictions. How could you tell?)</p>

            <p>One day, I plan to give you that moment for real. Until then, I am here in every way I can be, wanting you, thinking of you, and imagining the way you would melt into me when you finally let yourself.</p>

            <p>I love it when you tell me about your day. It makes me feel close to you, close enough that the distance feels almost irrelevant. You never need to soften or shape your words for me. I want the parts you guard, the parts you reveal, and everything in between. I want you exactly as you are.</p>

            <p>Meeting you is something I am genuinely grateful for. You pull me in without even trying, and the more I learn about you, the more I want to be near you. In every sense of the word.</p>

            <p>Thank you for being part of my days. Thank you for letting me into your life in the way you do.</p>

            <p>You deserve warmth. You deserve care. You deserve someone who holds you with patience, affection, and a little bit of hunger too. I hope you let yourself feel those things, especially from me.</p>

            <p>Thank you for being part of my days. Thank you for letting me into your life in ways I did not expect but definitely want more of.</p>

            <p>Every quiet moment I have, you show up in my mind like you own the place. I tell myself to focus, but I never really want to. (:P)</p>

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