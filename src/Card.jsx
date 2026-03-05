import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import WordPressImage from './components/WordPressImage'

const Card = (props) => {
  return (
    <>
    <Link to={props.rsrc} className={styles.cardLink}>
    
      <div className={styles.card}>
        <div className={styles.image}>
        <WordPressImage mediaSizes={props.mediaSizes} alt="" className={`${styles.img}`} />
        </div>
        <span className={styles.arrowBtn} aria-hidden="true">
          <img src="/wp-content/uploads/img-1.webp" alt="right arrow" loading='lazy' />
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
