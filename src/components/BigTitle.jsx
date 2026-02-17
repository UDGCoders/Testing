import React from 'react'
import styles from './BigTitle.module.css'

const BigTitle = ({ bigTitle, className = '', style }) => {
  return (
    <>
      <h2 className={`${styles.bigTitle} ${className}`.trim()} style={style}>
        {bigTitle}
      </h2>
    </>
  )
}

export default BigTitle
