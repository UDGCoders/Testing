import React, { useState } from 'react';
const CarouselUIT = ({ currentItem, onNext, onPrev }) => {
  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      background: 'transparent',
      padding: '20px',
      color: 'inherit'
    },
    contentArea: {
      width: '100%',
      minHeight: '200px',
      background: 'transparent',
      marginBottom: '20px',
    },
    controls: {
      display: 'flex',
      gap: '20px',
      background: 'transparent'
    },
    button: {
      background: 'transparent',
      border:'none',
      color: 'inherit',

      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '24px'
    }
  };

  if (!currentItem) return null;

  return (
    <div style={styles.wrapper}>
      {/* Content Area */}
      <div style={styles.contentArea}>
        <h2>{currentItem.title}</h2>
        <p style={{opacity: 0.8 }}>{currentItem.description}</p>
      </div>

      {/* Controls Section */}
      <div style={styles.controls}>
        <button style={styles.button} onClick={onPrev}>&lt;</button>
        <button style={styles.button} onClick={onNext}>&gt;</button>
      </div>
    </div>
  );
};

/**
 * 2. THE BRAIN (Controller Component)
 * Manages the index and circular logic.
 */
const CarouselUI = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) return <p>No data available.</p>;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <CarouselUI 
      currentItem={items[activeIndex]} 
      onNext={handleNext} 
      onPrev={handlePrev} 
    />
  );
};

export default CarouselUIT;