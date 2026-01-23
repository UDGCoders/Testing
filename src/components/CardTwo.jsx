import React from 'react'
import styles from './CardTwo.module.css'
const CardTwo = (props) => {
  return (
    <>
    <div className={styles.card}>
        <div>
            <img src={props.src} alt="our vision picture" className={`img-fluid ${styles.image}`} laoding='lazy' />
        </div>
        <div className={styles.content}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
    </>
  )
}

export default CardTwo