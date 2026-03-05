import React, { useEffect, useRef, useState } from "react";
import BigTitle from "../BigTitle";
import SmallTitle from "../SmallTitle";
import styles from "./TimeLineAbout.module.css"; // Import the CSS module

export default function TimeLineAbout({ items = [] }) {
  const timelineRef = useRef(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const viewCenter = window.innerHeight / 2;
      const distanceFromTop = viewCenter - rect.top;
      const totalHeight = rect.height;

      let percentage = (distanceFromTop / totalHeight) * 100;
      percentage = Math.min(Math.max(percentage, 0), 100);
      setProgressHeight(percentage);

      const itemElements = timelineRef.current.querySelectorAll(`.${styles.timelineItem}`);
      itemElements.forEach((el, i) => {
        const itemRect = el.getBoundingClientRect();
        if (itemRect.top < viewCenter && itemRect.bottom > viewCenter) {
          setActiveIndex(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`text-center ${styles.header}`}>
        <BigTitle bigTitle="OUR LEGACY OUR BRANDS" />
        <SmallTitle smallTitle="VISUALISED STEP BY STEP" />
      </div>

      <div className={styles.container}>
        <div className={styles.timeline} ref={timelineRef}>
          {/* Vertical Track */}
          <div className={styles.timelineTrack}></div>
          <div 
            className={styles.timelineProgress} 
            style={{ height: `${progressHeight}%` }}
          ></div>

          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const isActive = idx === activeIndex;

            return (
              <div key={idx} className={styles.timelineItem}>
                
                <div className={styles.centerMarker}>
                  {/* Year Label */}
                  <div 
                    className={styles.yearLabel}
                    style={{
                      left: isLeft ? 'calc(50% + 25px)' : 'auto',
                      right: !isLeft ? 'calc(50% + 25px)' : 'auto',
                      color: isActive ? '#00C950' : '#ffffff',
                    }}
                  >
                    {item.year}
                  </div>
                  
                  {/* Arrow Head */}
                  <div 
                    className={styles.arrowHead}
                    style={{
                      left: !isLeft ? '49.7%' : 'auto',
                      right: isLeft ? '49.7%' : 'auto',
                      borderRight: isLeft ? `18px solid ${isActive ? '#76C463' : '#fff'}` : 'none',
                      borderLeft: !isLeft ? `18px solid ${isActive ? '#76C463' : '#fff'}` : 'none',
                    }}
                  ></div>
                </div>

                {/* Card Container */}
                <div className={styles.cardWrapper} style={{
                  marginLeft: isLeft ? 0 : 'auto',
                  marginRight: isLeft ? 'auto' : 0,
                }}>
                  <div className={styles.card}>
                    <img 
                      src={item.image} 
                      alt="" 
                      className={styles.cardImg} 
                    />
                    <div className={styles.cardContent}>
                      <h3 style={{ 
                        margin: '0', textAlign: 'center', fontSize: '18px', fontWeight: '700', fontFamily: 'Inter' 
                      }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: '14px', textAlign: 'center',fontFamily:'Inter',fontWeight: '300',lineHeight: '1.5', color: '#fff' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}