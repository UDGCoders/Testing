import React from 'react'
import styles from './PrimaryText.module.css'
const PrimaryText = (props) => {
  return (
    <>
        <span className={styles.primaryText}>{props.primaryText}</span>
    </>
  )
}

export default PrimaryText