import React from 'react'
import styles from './PorfolioCard.module.css'

const PortfolioCard = ({ imageSrc, imageAlt, title, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt || title || 'Portfolio item'} />
        ) : null}
      </div>
      <div className={styles.content}>
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      {text ? <p className={styles.text}>{text}</p> : null}
      </div>
    </div>
  )
}

export default PortfolioCard
