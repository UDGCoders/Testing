import React from 'react'
import styles from './CardTwo.module.css'
import WordPressImage from './WordPressImage'
const CardTwo = (props) => {
  return (
    <>
    <div className={styles.card}>
        <div>
            <WordPressImage
              src={props.src}
              alt={props.alt || props.title || 'our vision'}
              className={`img-fluid ${styles.image}`}
            />
        </div>
        <div className={styles.content}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    </div>
    </>
  )
}

export default CardTwo
