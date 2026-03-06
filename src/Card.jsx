import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import WordPressImage from './components/WordPressImage'

const Card = (props) => {
  const cardAlt = props.alt || props.title || ''

  return (
    <>
    <Link to={props.rsrc} className={styles.cardLink}>
    
      <div className={styles.card}>
        <div className={styles.image}>
        <WordPressImage mediaSizes={props.mediaSizes} alt={cardAlt} className={`${styles.img}`} />
        </div>
        <span className={styles.arrowBtn} aria-hidden="true">
          <WordPressImage
            src="/wp-content/uploads/img-1.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </span>
        <div className={styles.content}>
          <h4>{props.title}</h4>
        </div>
      </div>
    </Link>
    </>
  )
}

export default Card
