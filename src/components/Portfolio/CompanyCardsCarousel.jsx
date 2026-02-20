import React, { useEffect, useMemo, useRef, useState } from 'react'
import PrimaryText from '../PrimaryText'
import styles from './CompanyCardsCarousel.module.css'

const hasText = (value) =>
  typeof value === 'string' ? value.trim().length > 0 : Boolean(value)

const getSlidesPerView = (width) => {
  if (width < 768) return 1
  if (width < 992) return 2
  return 3
}

const CompanyCardsCarousel = ({ cards }) => {
  const items = useMemo(
    () => (Array.isArray(cards) ? cards.filter(Boolean) : []),
    [cards]
  )
  const [slidesPerView, setSlidesPerView] = useState(() =>
    typeof window === 'undefined' ? 3 : getSlidesPerView(window.innerWidth)
  )
  const canNavigate = items.length > slidesPerView
  const cloneCount = canNavigate ? slidesPerView : 0
  const [activeIndex, setActiveIndex] = useState(cloneCount)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const touchStartXRef = useRef(0)
  const touchEndXRef = useRef(0)
  const touchStartYRef = useRef(0)
  const touchEndYRef = useRef(0)
  const swipeThreshold = 50

  const renderedItems = useMemo(() => {
    if (!canNavigate) return items
    return [
      ...items.slice(-cloneCount),
      ...items,
      ...items.slice(0, cloneCount),
    ]
  }, [canNavigate, cloneCount, items])

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setActiveIndex(cloneCount)
    setIsTransitioning(true)
  }, [cloneCount, items.length, slidesPerView])

  const nextSlide = () => {
    if (!canNavigate) return
    setActiveIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    if (!canNavigate) return
    setActiveIndex((prev) => prev - 1)
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

  const handleTransitionEnd = () => {
    if (!canNavigate) return

    const rightBoundary = items.length + cloneCount
    const leftBoundary = cloneCount - 1

    if (activeIndex >= rightBoundary) {
      setIsTransitioning(false)
      setActiveIndex((prev) => prev - items.length)
      return
    }

    if (activeIndex <= leftBoundary) {
      setIsTransitioning(false)
      setActiveIndex((prev) => prev + items.length)
    }
  }

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true))
    }
  }, [isTransitioning])

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
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${(activeIndex * 100) / slidesPerView}%)`,
            transition: isTransitioning ? 'transform 0.45s ease' : 'none',
          }}
        >
          {renderedItems.map((card, index) => (
            <article
              key={`${card?.id || card?.bigTitle || 'slide'}-${index}`}
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

      {canNavigate && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navButton}
            onClick={prevSlide}
            aria-label="Previous cards"
          >
            &larr;
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Next cards"
          >
            &rarr;
          </button>
        </div>
      )}
    </section>
  )
}

export default CompanyCardsCarousel
