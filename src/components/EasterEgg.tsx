import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EasterEgg: React.FC = () => {
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newCode = [...konamiCode, event.code];
      setKonamiCode(newCode.slice(-10)); // Keep only last 10 keys
      
      if (newCode.slice(-10).join(',') === konamiSequence.join(',')) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 5000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiCode, konamiSequence]);

  // Secret clickable area: click 5 times to trigger easter egg
  const [secretClicks, setSecretClicks] = useState(0);
  const handleSecretClick = () => {
    setSecretClicks(prev => {
      if (prev === 4) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000);
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <>
      {/* Secret clickable area */}
      <div
        onClick={handleSecretClick}
        className="fixed top-0 left-0 w-4 h-4 z-40 cursor-pointer opacity-0"
        title="Secret area"
      />

      {/* Easter Egg Modal */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          >
            <motion.div
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black bg-opacity-95 p-8 rounded-2xl border-4 border-neon-yellow text-center max-w-md"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-neon-yellow mb-4 neon-glow">
                Easter Egg Found!
              </h2>
              <p className="text-neon-blue mb-4">
                You discovered the secret! This portfolio was built with love and lots of coffee ☕
              </p>
              <div className="text-2xl space-y-2">
                <div className="text-neon-pink">🚀 React + Three.js</div>
                <div className="text-neon-blue">🎨 Tailwind CSS</div>
                <div className="text-neon-green">✨ Framer Motion</div>
                <div className="text-neon-purple">💻 TypeScript</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowEasterEgg(false)}
                className="mt-6 bg-neon-yellow text-black px-6 py-3 rounded-lg font-bold hover:bg-neon-pink transition-colors"
              >
                Awesome!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEgg; 