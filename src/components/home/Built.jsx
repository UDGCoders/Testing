import React from 'react'
import styles from './Built.module.css'
import CompanySlider from './CompanySlider/CompanySlider';
const Built = (props) => {
  return (
    <>
    <div className={`container ${styles.built}`}>
        <h2 className={`text-center ${styles.h2}`}>{props.title}</h2>
        <p className={`text-center ${styles.p}`}>{props.description}</p>
    </div>
    <CompanySlider/>
    </>
  )
}

export default Built