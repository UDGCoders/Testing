import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Hero.module.css'

const Hero = ({ animatedTexts, scrollTargetId, onScrollTarget }) => {
  const [index, setIndex] = useState(0)
  const textsRef = useRef([])

  useEffect(() => {
    textsRef.current = Array.isArray(animatedTexts) ? animatedTexts : []
    if (textsRef.current.length === 0) {
      setIndex(0)
    }
  }, [animatedTexts])

  useEffect(() => {
    if (!textsRef.current || textsRef.current.length === 0) return

    const interval = setInterval(() => {
      setIndex((prev) => {
        const len = textsRef.current.length
        if (len === 0) return 0
        return (prev + 1) % len
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [animatedTexts?.length])

  const targetId =
    typeof scrollTargetId === 'string' ? scrollTargetId.trim() : ''
  const handleScroll = (e) => {
    if (!targetId) return
    e.preventDefault()
    if (typeof onScrollTarget === 'function') {
      onScrollTarget(targetId)
    }
    const scrollToTarget = () => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    scrollToTarget()
    requestAnimationFrame(scrollToTarget)
  }

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        <motion.div
          key={animatedTexts?.[index]}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 1 }}
          className={[
            styles.animatedText,
            animatedTexts?.[index] && animatedTexts[index].length > 14
              ? styles.animatedTextSmall
              : ''
          ].join(' ').trim()}
        >
          {animatedTexts?.[index]}
        </motion.div>
      </AnimatePresence>

      {/* Animated Circle */}
      <button
        type="button"
        onClick={handleScroll}
        aria-label="Scroll to next section"
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          textDecoration: 'none',
          color: 'white',
          cursor: 'pointer'
        }}
      >
      <motion.div className={styles.circle}>
        <motion.div
          animate={{
            y: [-40, 0, 0, 40],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            times: [0, 0.2, 0.7, 1],
            repeat: Infinity,
          }}
          className={styles.arrow}
        >
          ↓
          
        </motion.div>
      </motion.div>
      </button>
    </div>
  )
}

export default Hero
