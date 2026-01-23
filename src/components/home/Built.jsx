import React from 'react'
import styles from './Built.module.css'
import { Carousel } from 'bootstrap'
import CompanySlider from './CompanySlider/CompanySlider';
const Built = (props) => {
   const data = [
  {
    title: "Marketing & IT Solutions",
    year: "2023",
    image: "wp-content/uploads/2026/01/Group.webp",
  },
  {
    title: "RMAAC Group",
    year: "2012",
    image: "wp-content/uploads/2026/01/Logo-2-1.webp",
  },
  {
    title: "RMAAC Technologies",
    year: "2013",
    image: "wp-content/uploads/2026/01/Group-3687.webp",
  },
];
  return (
    <>
    <div className={`container ${styles.built}`}>
        <h2 className={`text-center ${styles.h2}`}>{props.title}</h2>
        <p className={`text-center ${styles.p}`}>{props.description}</p>
    </div>
    <CompanySlider items={data}/>
    </>
  )
}

export default Built