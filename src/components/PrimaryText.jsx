import React from 'react'
import styles from './PrimaryText.module.css'
const PrimaryText = (props) => {
  return (
    <>
        <p className={styles.primaryText}>{props.primaryText}</p>
    </>
  )
}

export default PrimaryText