import React from "react";
import BigTitle from "../BigTitle";
import SmallTitle from "../SmallTitle";
import styles from "./Gallery.module.css";
import PrimaryText from "../PrimaryText";
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
      <img src={images[0]} alt=""className={styles.col} />
      <img src={images[1]} alt=""  className={styles.row} />
      <img src={images[2]} alt="" className={styles.row} />
      <img src={images[3]} alt="" className={styles.col} />
    </div>
    </>
  );
};

export default Gallery;
