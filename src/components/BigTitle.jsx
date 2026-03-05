import React from 'react'
import styles from './BigTitle.module.css'

const BigTitle = ({ bigTitle, className = '', style }) => {
  return (
    <>
      <span className={`${styles.bigTitle} ${className}`.trim()} style={style}>
        {bigTitle}
      </span>
    </>
  )
}

export default BigTitle
