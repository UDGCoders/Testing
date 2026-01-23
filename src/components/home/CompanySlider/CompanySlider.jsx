import React, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./CompanySlider.module.css";

/* ===========================
   Company Data
=========================== */

const companyImages = [
  {
    id: 1,
    activeImage: "wp-content/uploads/2026/01/rmaac-group-white.avif",
    inactiveImage: "wp-content/uploads/2026/01/Frame-2608373.webp",
  },
  {
    id: 2,
    activeImage: "wp-content/uploads/2026/01/360-digital-white.webp",
    inactiveImage: "wp-content/uploads/2026/01/Frame-2608407.webp",
  },
  {
    id: 3,
    activeImage: "wp-content/uploads/2026/01/Frame-2608406.webp",
    inactiveImage: "wp-content/uploads/2026/01/Frame-2608411.webp",
  },
  {
    id: 4,
    activeImage: "wp-content/uploads/2026/01/Frame-2608404.webp",
    inactiveImage: "wp-content/uploads/2026/01/Frame-2608409.webp",
  },
  {
    id: 5,
    activeImage: "wp-content/uploads/2026/01/Frame-2608403-1.webp",
    inactiveImage: "wp-content/uploads/2026/01/Frame-2608408.webp",
  },
  {
    id: 6,
    activeImage: "wp-content/uploads/2026/01/Frame-2608405.webp",
    inactiveImage: "wp-content/uploads/2026/01/Frame-2608410.webp",
  },
];

/* ===========================
   Component
=========================== */

const CompanySlider = () => {
  const items = companyImages;
  const hasItems = items.length > 0;

  const slidesPerView = Math.min(items.length, 3);
  const slideWidth = 100 / slidesPerView;
  const cloneCount = slidesPerView;

  const clonedItems = useMemo(() => {
    if (!hasItems) return [];
    return [
      ...items.slice(-cloneCount),
      ...items,
      ...items.slice(0, cloneCount),
    ];
  }, [items, cloneCount, hasItems]);

  const [activeIndex, setActiveIndex] = useState(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    if (!isTransitioning) return;
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setActiveIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (!hasItems) return;

    const total = clonedItems.length;

    if (activeIndex === total - cloneCount) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(cloneCount);
      }, 500);
    }

    if (activeIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(total - cloneCount * 2);
      }, 500);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex, clonedItems.length, cloneCount, hasItems]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  if (!hasItems) return null;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(calc(50% - ${activeIndex * slideWidth}% - ${
              slideWidth / 2
            }%))`,
            transition: isTransitioning
              ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {clonedItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`${item.id}-${index}`}
                className={`${styles.carouselSlide} ${
                  isActive ? styles.active : styles.inactive
                }`}
                style={{ width: `${slideWidth}%` }}
              >
                <div className={styles.carouselImageWrapper}>
                  <img
                    src={isActive ? item.activeImage : item.inactiveImage}
                    alt="Company Logo"
                    className={styles.carouselImage}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.carouselControls}>
        <button
          className={styles.carouselNavBtn}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          className={styles.carouselNavBtn}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CompanySlider;
