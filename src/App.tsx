import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';
import MusicToggle from './components/MusicToggle';
import EasterEgg from './components/EasterEgg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-neon-bg">
        <AnimatePresence>
          {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        </AnimatePresence>
        
        {!isLoading && (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <MusicToggle />
            <EasterEgg />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
