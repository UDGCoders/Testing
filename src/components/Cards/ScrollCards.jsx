import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  { id: 1, title: "Construction", src: "/wp-content/uploads/construction-scaled-1.webp" },
  { id: 2, title: "App Development", src: "/wp-content/uploads/appdevelopment-scaled-1.webp" },
  { id: 3, title: "Digital Marketing", src: "/wp-content/uploads/digitalmarketing-scaled-1.webp" },
  { id: 4, title: "IT Solutions", src: "/wp-content/uploads/itsolutions-scaled-2.webp" },
];

const ScrollCards = () => {
  // We duplicate the array to ensure a seamless loop. 
  // Doubling works if the total width exceeds the screen width.
  const duplicatedCards = [...cardData, ...cardData];

  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    padding: '2rem 0',
    background: 'transparent'
  };

  const trackStyle = {
    display: 'flex',
    width: 'max-content', // Allows track to extend beyond screen
    gap: '20px'
  };

  const cardStyle = {
    position: 'relative',
    width: '300px',
    height: '400px',
    borderRadius: '6px',
    overflow: 'hidden',
    flexShrink: 0,
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '20px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: '600'
  };

  return (
    <div style={containerStyle}>
      <motion.div
        style={trackStyle}
        animate={{ x: ["0%", "-50%"] }} // Slide exactly half-way (one full set)
        transition={{
          ease: "linear",
          duration: 30, // Adjust speed (higher is slower)
          repeat: Infinity,
        }}
      >
        {duplicatedCards.map((card, index) => (
          <div key={index} style={cardStyle}>
            <img src={card.src} alt={card.title} style={imageStyle} />
            <div style={overlayStyle}>
              {card.title}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollCards;