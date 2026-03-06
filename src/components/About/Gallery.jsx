import React from "react";
import BigTitle from "../BigTitle";
import SmallTitle from "../SmallTitle";
import styles from "./Gallery.module.css";
import PrimaryText from "../PrimaryText";
import WordPressImage from "../WordPressImage";
const Gallery = () => {
    const images = [
  "/wp-content/uploads/1-1.webp",
  "/wp-content/uploads/3-3-scaled-1.webp",
  "/wp-content/uploads/4-4-scaled-1.webp",
  "/wp-content/uploads/2-2.webp",
];
  return (
    <>
      <div className={`container ${styles.gallery}`}>
        <div className="text-center col-md-8">
            <div className={`${styles.title}`}>
          <BigTitle bigTitle="A TEAM THAT" />
          <SmallTitle smallTitle="BUILDS TOGETHER" /></div>
          <PrimaryText primaryText="At RMAAC, we believe great work starts with great people and even better vibes. We're not just coworkers, we're a crew that celebrates wins, learns from losses, and genuinely enjoys building cool things together. Our values? Ownership, honesty, curiosity, and growth — both personal and professional."/>
        </div>
        
      </div>
      <div className={`container ${styles.gallery2}`}>
      <WordPressImage src={images[0]} alt="RMAAC team gallery image 1" className={styles.col} />
      <WordPressImage src={images[1]} alt="RMAAC team gallery image 2" className={styles.row} />
      <WordPressImage src={images[2]} alt="RMAAC team gallery image 3" className={styles.row} />
      <WordPressImage src={images[3]} alt="RMAAC team gallery image 4" className={styles.col} />
    </div>
    </>
  );
};

export default Gallery;
