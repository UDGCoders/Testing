import React from 'react'
import styles from './smallTitle.module.css';
const SmallTitle = (props) => {
  return (
    <>
        <h2 className={styles.smallTitle}>{props.smallTitle}</h2>
        </>
  )
}

export default SmallTitle