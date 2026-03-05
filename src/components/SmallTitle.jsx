import React from 'react'
import styles from './smallTitle.module.css';
const SmallTitle = (props) => {
  return (
    <>
        <span className={styles.smallTitle}>{props.smallTitle}</span>
        </>
  )
}

export default SmallTitle