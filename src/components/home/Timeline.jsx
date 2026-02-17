import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './Timeline.module.css';

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const cards = [
    { id: 1, image: '/wp-content/uploads/new-1.webp' },
    {
      id: 2,
      title: 'RMAAC Launches AI Chatbots & Voice Receptionists',
      weekdays: 'Saturday to Monday',
      startingYear: 'Sep 6 to 8, 2025',
    },
    {
      id: 3,
      title: 'RMAAC GROUP TO ATTEND DATTOCON 25 - Leading MSP Conference',
      weekdays: 'Monday to Wednesday',
      startingYear: 'Oct 6 to 8, 2025',
    },
    { id: 4, image: '/wp-content/uploads/new-2-1.webp' },
  ];

  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 2) {
    groupedCards.push(cards.slice(i, i + 2));
  }

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={`container ${styles.timelineContainer}`}>
        <div className={styles.lineTrack}>
          <motion.div className={styles.lineFill} style={{ scaleY }} />
        </div>

        {groupedCards.map((pair, index) => (
          <div key={index} className={styles.timelineRow}>
            {pair.map((card, cardIndex) => (
              <motion.div
                key={card.id}
                className={`${styles.card} ${card.image ? styles.imageCard : ''} ${cardIndex % 2 === 0 ? styles.leftSide : styles.rightSide}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title || `Timeline visual ${card.id}`}
                    className={styles.cardImg}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className={styles.textPadding}>
                    <h3>{card.title}</h3>
                    <div className={styles.timeMeta}>
                      <div className={styles.timeIconWrap}>
                        <img
                          src="/wp-content/uploads/date.webp"
                          alt="calendar logo"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <p className={styles.weekdays}>{card.weekdays}</p>
                        <p className={styles.startingYear}>{card.startingYear}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
