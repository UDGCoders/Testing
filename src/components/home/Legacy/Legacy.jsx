import React from 'react'
import styles from './Legacy.module.css'
import ImageGrid from './ImageGrid'
const Legacy = (props) => {
  return (
    <>
    <div className={styles.legacy}>
        <div className="text-center">
            <h2 className={styles.bigtitle}>{props.bigtitle} <span className={styles.smallTitle}>{props.smallTitle}</span></h2>
            <p>{props.description}</p>
            </div>
            <ImageGrid/>
    </div>
    </>
  )
}

export default Legacy