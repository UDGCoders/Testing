import React, { useState } from 'react';
import styles from './ImageGrid.module.css';

const ImageGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const gridData = [
    { id: 0, img1: '/wp-content/uploads/5-our-brands.webp', img2: '/wp-content/uploads/markalytics-colored.webp' },
    { id: 1, img1: '/wp-content/uploads/6-our-brands.webp', img2: '/wp-content/uploads/real.webp' },
    { id: 2, img1: '/wp-content/uploads/7-our-brands.webp', img2: '/wp-content/uploads/rmaac-developers-colored.webp' },
    { id: 3, img1: '/wp-content/uploads/8-our-brands.webp', img2: '/wp-content/uploads/dev-nest-colored.webp' },
    { id: 4, img1: '/wp-content/uploads/1-our-brands.webp', img2: '/wp-content/uploads/Group-3687.webp' },
    { id: 5, img1: '/wp-content/uploads/2-our-brands.webp', img2: '/wp-content/uploads/premier-private-gp-colored.webp' },
    { id: 6, img1: '/wp-content/uploads/3-our-brands.webp', img2: '/wp-content/uploads/sehat-zindagi-colored.webp' },
    { id: 7, img1: '/wp-content/uploads/4-our-brands.webp', img2: '/wp-content/uploads/evo-studio-colored.webp' },
  ];

  return (
    <div className={styles.gridContainer}>
      {gridData.map((item, index) => (
        <div 
          key={item.id} 
          className={`${styles.gridBox} ${activeIndex === index ? styles.active : ''}`}
          // Hover Events
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <img 
            src={activeIndex === index ? item.img2 : item.img1} 
            alt={`Box ${index}`} 
            className={styles.gridImage}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;