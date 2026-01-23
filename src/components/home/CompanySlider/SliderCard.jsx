import React from "react";
import styles from "./SliderCard.module.css";

const SliderCard = ({ title, year, image, active }) => {
  return (
    <div

      className={`${styles.card} ${active ? styles.active : ""}`}
      style={{
        backgroundColor: active ? "white" : "transparent",
        backgroundImage: active 
          ? "none" 
          : `url("wp-content/uploads/2026/01/0bd058d3db941a04d87931cfaea8cbad6e3af9d9.webp")`,
        padding: active ? "30px" : "0px",
        color: active ? "black" : "white",
      }}
    >
      <div className={styles.content}>
        <img 
          src={image} 
          alt={title} 

          style={{ filter: active ? "invert(1)" : "none" }} 
        />
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default SliderCard;