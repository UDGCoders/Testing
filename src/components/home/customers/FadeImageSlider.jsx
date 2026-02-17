import { useEffect, useState } from "react";
import styles from "./FadeImageSlider.module.css";

const FadeImageSlider = ({ images = [], interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images.length) return null;

  return (
    <div className={`image ${styles.fadeSlider}`}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Team Member"
          className={`img-fluid ${styles.fadeImage} ${
            index === current ? styles.active : ""
          }`}
        />
      ))}
    </div>
  );
};

export default FadeImageSlider;
