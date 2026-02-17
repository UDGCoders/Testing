import React from 'react'
import BigTitle from '../BigTitle'
import SmallTitle from '../SmallTitle'
import styles from './Portfolio.module.css'
import PrimaryText from '../PrimaryText'
import PrimaryButton from '../PrimaryButton'

const hasText = (value) =>
  typeof value === 'string' ? value.trim().length > 0 : Boolean(value)

const PortfolioHero = ({
  bigTitle = 'MEET THE AUTOMATIONS',
  smallTitle = 'THAT FREE UP YOUR SMARTEST PEOPLE',
  primaryText = 'Every project here started as a goal and became a measurable success. Dive in to see how AI, cybersecurity, and innovation come together.',
  primaryButtonText = 'VIEW OUR WORK',
  secondaryButtonText = 'START YOUR SUCCESS STORY',
  primaryButtonOnClick,
  secondaryButtonOnClick,
  showScrollButton = true,
  scrollLabel = 'Scroll',
  scrollOffset = 0.9,
}) => {
  const handleScroll = () => {
    if (typeof window === 'undefined') return
    window.scrollBy({ top: window.innerHeight * scrollOffset, behavior: 'smooth' })
  }

  return (
    <>
      <div className={`container ${styles.portfolioHero}`}>
        <div className={''}>
          <div className={styles.textWrap}>
            {showScrollButton && (
              <button
                type="button"
                className={styles.scrollButton}
                aria-label={scrollLabel}
                onClick={handleScroll}
              >
                <span className={styles.scrollArrow}>&darr;</span>
              </button>
            )}
            {hasText(bigTitle) && <BigTitle bigTitle={bigTitle} />}
            {hasText(smallTitle) && <SmallTitle smallTitle={smallTitle} />}
            <div className={styles.lead}>
              {hasText(primaryText) && <PrimaryText primaryText={primaryText} />}
            </div>
            {(hasText(primaryButtonText) || hasText(secondaryButtonText)) && (
              <div className={styles.actions}>
                {hasText(primaryButtonText) && (
                  <PrimaryButton
                    btntxt={primaryButtonText}
                    onClick={primaryButtonOnClick}
                  />
                )}
                {hasText(secondaryButtonText) && (
                  <PrimaryButton
                    btntxt={secondaryButtonText}
                    onClick={secondaryButtonOnClick}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioHero