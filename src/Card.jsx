import React from 'react'
import styles from './Card.module.css'


const Card = (props) => {
  return (
    <div className={styles.card}>
            <img src={props.src}
             alt="our work card " className={`img-fluid ${styles.img}`} loading='dynamic'/>
             <button className={styles.arrowBtn}>
               <img src="/wp-content/uploads/img-1.webp" alt="right arrow" loading='dynamic' />
             </button>
             <div className={styles.content}>
             <h2>{props.title}</h2>
             </div>
        </div>
  )
}

export default Card