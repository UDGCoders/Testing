import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './Timeline.module.css';

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const cards = [
    { id: 1, image: "wp-content/uploads/2026/01/new-1.webp" },
    { id: 2, title: "RMAAC GROUP TO ATTEND DATTOCON 25 - Leading MSP Conference", weekdays:"Monday to Wednesday",startingYear:"Oct 6 to 8, 2025" },
    { id: 3, title: "RMAAC Launches AI Chatbots & Voice Receptionists ", weekdays:"Saturday to Monday",startingYear:"Sep 6 to 8, 2025" },
    { id: 4, image: "wp-content/uploads/2026/01/new-2-1.webp" },
  ];

  // Logic to group cards into pairs: [[1, 2], [3, 4]]
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 2) {
    groupedCards.push(cards.slice(i, i + 2));
  }

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.timelineContainer}>
        
        {/* Central Vertical Line */}
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
                  <img src={card.image} alt={card.title} className={styles.cardImg} loading='dynamic' />
                ) : (
                  <div className={styles.textPadding}>
                    <h3>{card.title}</h3>
                    <div className="time" style={{ display: "flex",gap: "15px",marginTop:"20px" }}>
                        <div className="image">
                            <img src="wp-content/uploads/2026/01/date.webp" alt="calendar logo" loading="lazy" />
                        </div>
                        <div className="content">
                        <p className='weekdays'>{card.weekdays}</p>
                        <p className='starting year'>{card.startingYear}</p>
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