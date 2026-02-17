import React from 'react'
import styles from './PillarCards.module.css'
const PillarCards = (props) => {
  return (
    <>
    <div className={styles.pillarCard}>
        <h2 className={styles.pillarHeading}>{props.pillarHeading}</h2>
        <p className={styles.pillarDescription}>{props.pillarDescription}</p>
    </div>
    </>
  )
}

export default PillarCards