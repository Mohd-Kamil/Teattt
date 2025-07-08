import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Scene3D from '../components/Scene3D';

const Home: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-neon-bg pt-20">
      {/* Welcome Overlay */}
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 z-40 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black bg-opacity-90 p-8 rounded-2xl border-2 border-neon-pink max-w-md text-center"
          >
            <h2 className="text-3xl font-bold text-neon-pink mb-4">Welcome to My Studio</h2>
            <p className="text-neon-blue mb-6">
              Explore my cyberpunk creative workspace. Click and drag to navigate the 3D environment!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowWelcome(false)}
              className="bg-neon-pink text-black px-6 py-3 rounded-lg font-bold hover:bg-neon-blue transition-colors"
            >
              Enter Studio
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-extrabold text-neon-pink mb-4">
            Web Developer & Designer
          </h1>
          <p className="text-xl text-neon-blue max-w-2xl mx-auto">
            Crafting immersive digital experiences with cutting-edge technology and creative vision
          </p>
        </motion.div>

        {/* 3D Scene */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <Scene3D />
        </motion.div>

        {/* Interactive Features */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black bg-opacity-60 p-6 rounded-xl border border-neon-blue text-center"
          >
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-neon-pink font-bold mb-2">Creative Design</h3>
            <p className="text-neon-blue">Immersive UI/UX experiences</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black bg-opacity-60 p-6 rounded-xl border border-neon-green text-center"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-neon-green font-bold mb-2">Modern Tech</h3>
            <p className="text-neon-blue">React, Three.js, TypeScript</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black bg-opacity-60 p-6 rounded-xl border border-neon-yellow text-center"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-neon-yellow font-bold mb-2">Performance</h3>
            <p className="text-neon-blue">Optimized & scalable solutions</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 