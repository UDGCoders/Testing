import { useEffect, useMemo, useState } from "react";
import styles from "./FadeImageSlider.module.css";

const FadeImageSlider = ({ images = [], interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const validImages = useMemo(
    () =>
      Array.isArray(images)
        ? images.filter((img) => typeof img === "string" && img.trim() !== "")
        : [],
    [images]
  );

  useEffect(() => {
    if (validImages.length > 0 && current >= validImages.length) {
      setCurrent(0);
    }
  }, [current, validImages.length]);

  useEffect(() => {
    if (validImages.length < 2) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % validImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [validImages.length, interval]);

  if (!validImages.length) return null;

  return (
    <div className={styles.fadeSlider}>
      {validImages.map((img, index) => (
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
