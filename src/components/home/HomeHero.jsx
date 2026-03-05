import React, { useState, useEffect } from 'react';
import './home.css';
import { motion, AnimatePresence } from "framer-motion";

const HomeHero = ({ main, texts }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="hero">
      <div className="text-center">
      {main && <h1 className='maintext'>{main}</h1>}

      <div className="text-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={texts[index]}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="animated-text"
          >
            {texts[index]}
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
};

export default HomeHero;
