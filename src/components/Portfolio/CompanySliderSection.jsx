import React, { useEffect, useRef, useState } from 'react'
import PrimaryText from '../PrimaryText'
import styles from './CompanySliderSection.module.css'

const hasText = (value) =>
  typeof value === 'string' ? value.trim().length > 0 : Boolean(value)

const getSlidesPerView = (width) => {
  if (width < 768) return 1
  if (width < 992) return 2
  return 3
}

const CompanySliderSection = ({ cards }) => {
  const items = Array.isArray(cards) ? cards.filter(Boolean) : []
  const [slidesPerView, setSlidesPerView] = useState(() =>
    typeof window === 'undefined' ? 3 : getSlidesPerView(window.innerWidth)
  )
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartXRef = useRef(0)
  const touchEndXRef = useRef(0)
  const touchStartYRef = useRef(0)
  const touchEndYRef = useRef(0)
  const swipeThreshold = 50

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(items.length - slidesPerView, 0)

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  const nextSlide = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  const resetTouchState = () => {
    touchStartXRef.current = 0
    touchEndXRef.current = 0
    touchStartYRef.current = 0
    touchEndYRef.current = 0
  }

  const handleTouchStart = (event) => {
    if (event.touches.length !== 1) return
    const touch = event.touches[0]
    touchStartXRef.current = touch.clientX
    touchEndXRef.current = touch.clientX
    touchStartYRef.current = touch.clientY
    touchEndYRef.current = touch.clientY
  }

  const handleTouchMove = (event) => {
    if (event.touches.length !== 1) return
    const touch = event.touches[0]
    touchEndXRef.current = touch.clientX
    touchEndYRef.current = touch.clientY
  }

  const handleTouchEnd = () => {
    const deltaX = touchEndXRef.current - touchStartXRef.current
    const deltaY = touchEndYRef.current - touchStartYRef.current

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) >= swipeThreshold) {
      if (deltaX < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    resetTouchState()
  }

  if (!items.length) return null

  return (
    <section className={`container ${styles.sliderSection}`}>
      <div
        className={styles.viewport}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={resetTouchState}
      >
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${(activeIndex * 100) / slidesPerView}%)`,
          }}
        >
          {items.map((card, index) => (
            <article
              key={card?.id || card?.bigTitle || index}
              className={styles.slide}
              style={{ width: `${100 / slidesPerView}%` }}
            >
              <div className={styles.card}>
                {hasText(card?.imageSrc) && (
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt || card.bigTitle || 'Company slide'}
                    className={styles.cardImage}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className={styles.titleWrap}>
                  {hasText(card?.bigTitle) && (
                    <h3 className={styles.bigTitle}>{card.bigTitle}</h3>
                  )}
                  {hasText(card?.smallTitle) && (
                    <h3 className={styles.smallTitle}>{card.smallTitle}</h3>
                  )}
                </div>
                {hasText(card?.primaryText) && (
                  <div className={styles.primaryTextWrap}>
                    <PrimaryText primaryText={card.primaryText} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navButton}
            onClick={prevSlide}
            disabled={activeIndex === 0}
            aria-label="Previous cards"
          >
            &larr;
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={nextSlide}
            disabled={activeIndex === maxIndex}
            aria-label="Next cards"
          >
            &rarr;
          </button>
        </div>
      )}
    </section>
  )
}

export default CompanySliderSection
