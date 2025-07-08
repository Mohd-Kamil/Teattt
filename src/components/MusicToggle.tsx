import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/cyberpunk-ambient.mp3')); // You'll need to add this audio file

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3;
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {
        // Handle autoplay restrictions
        console.log('Autoplay blocked by browser');
      });
      setIsPlaying(true);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 bg-black bg-opacity-80 p-4 rounded-full border-2 border-neon-pink neon-border-glow"
      title={isPlaying ? 'Pause Music' : 'Play Music'}
    >
      <motion.div
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
        className="text-2xl"
      >
        {isPlaying ? '🎵' : '🔇'}
      </motion.div>
    </motion.button>
  );
};

export default MusicToggle; 