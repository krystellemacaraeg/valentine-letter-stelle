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
            
            <p>I hope you read this when your mind is calm enough to handle the truth, which is that you have been living rent free in my head all day again. I tried to go about my day like a normal, responsible human being (BAHAHAHAHA), but then you showed up in my thoughts like a full blown hurri<i>Kane</i> and absolutely wrecked my focus. Truly devastating. Zero survivors. I should file a complaint.</p>

            <p>I really like knowing you. Every little thing you reveal pulls me in deeper. There is something so ar<i>Kane</i> about you, like a mystery I want to solve one quiet moment at a time. The more I learn, the more I want to keep going. You make me smile way too easily and suddenly my heart is like, <i>Kane</i> you not. It is honestly unfair and possibly a violation of several international laws.</p>

            <p>I know your days can feel heavy. I know the long hours and the pressure weigh on you more than you let on. Whenever you share even a glimpse of what you carry, I feel lucky that you trust me with it. You never have to pretend with me. You never have to maintain that strong front you show the world. I want the real you, the tired parts, the soft parts, even the parts you think you should hide. Trust me, I am very capable of loving all of it.</p>

            <p>And if I could be with you right now, I would walk straight up to you and pull you against me, just close enough for you to feel every bit of attention I have on you. I would brush my fingers along your arm, slow and deliberate, just to see the exact moment your breath softens. I would lean in, let my lips hover near yours for a second longer than necessary, and kiss you gently, the kind of kiss that tells you to forget everything else for a moment and focus only on me. I would let you rest your forehead against mine, let you feel how steady I am for you, and let the world fall away until it is just the two of us in that quiet space. (Consider this your official <i>Kane</i>fession that yes, I read a lot of fanfictions. You can probably tell.)</p>

            <p>One day, I will give you that moment for real. Until then, I am here, thinking about you, wanting you, and imagining exactly how easily you would melt into me once you let yourself. Spoiler alert, I am very patient, but I am also very <i>Kane</i>vinced it will be worth the wait.</p>

            <p>I love when you tell me about your day. It makes the distance feel almost irrelevant, like it is barely even trying. You never have to filter your words for me. I want the guarded parts, the open parts, and everything in between. I want you exactly as you are, no <i>Kane</i>ditions required.</p>

            <p>Meeting you is something I am genuinely grateful for. You pulled me in without even trying, and the more I learn about you, the more I want to be close to you. Emotionally, mentally, physically, all of the above. You really do have a way of <i>Kane</i>quering my attention.</p>

            <p>You deserve warmth. You deserve care. You deserve someone who holds you with patience, affection, and just a little bit of hunger too. I hope you let yourself feel those things, especially from me. I promise I handle you with care, patiently and gently, because you are very much worth it.</p>

            <p>Thank you for being part of my days. Thank you for letting me into your life in ways I did not expect but definitely want more of.</p>

            <p>Every quiet moment I have, you show up in my mind like you own the place. I tell myself to focus, but honestly, I have no desire to <i>Kane</i>trol that.</p>

            <p className="valentine-text">Happy Valentine's Day, Baby.</p>

            <div className="signature">
              Yours,<br/>Stelle<br/><br/>
            </div>

            <p><b>P.S.</b> I put an unreasonable amount of effort into those Kane puns. Please be proud of me. This was not easy and I <i>Kane</i>not be stopped once I started.</p>
            <br/><br /><br />
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