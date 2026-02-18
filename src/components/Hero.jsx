import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Hero.module.css'

const Hero = ({ animatedTexts }) => {
  const texts =
    Array.isArray(animatedTexts) && animatedTexts.length > 0
      ? animatedTexts
      : ['']

  const [index, setIndex] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    setIndex(0)
    setCycle(0)
  }, [animatedTexts])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (texts.length > 1 ? (prev + 1) % texts.length : 0))
      // Keep remounting text so animation repeats forever, even with 1 item.
      setCycle((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [texts.length])

  const handleScrollDown = () => {
    const target = document.getElementById('scroll-down')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${index}-${cycle}`}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 150 }}
          transition={{ duration: 0.8 }}
          className={[
            styles.animatedText,
            texts[index] && texts[index].length > 14
              ? styles.animatedTextSmall
              : ''
          ]
            .join(' ')
            .trim()}
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
      <button
        type="button"
        className={styles.circleButton}
        onClick={handleScrollDown}
        aria-label="Scroll down"
      >
        <div className={styles.circle} aria-hidden="true">
          <motion.div
            animate={{
              y: [-40, 0, 0, 40],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2,
              times: [0, 0.2, 0.7, 1],
              repeat: Infinity
            }}
            className={styles.arrow}
          >
            &darr;
          </motion.div>
        </div>
      </button>
    </div>
  )
}

export default Hero
