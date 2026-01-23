import React from 'react'
import styles from './Customers.module.css'
import CarouselInterface from './CarouselInterface';
const Customers = (props) => {
    const myCarouselData = [
  { 
    id: 1, 
    title: "Eco-Friendly Design", 
    description: "Our components use 100% transparent backgrounds to blend with your brand." 
  },
  { 
    id: 2, 
    title: "Scalable Logic", 
    description: "The container handles the math, so you can add 100 slides if you need to." 
  },
  { 
    id: 3, 
    title: "Clean Architecture", 
    description: "Separating logic from look makes your React code professional and easy to maintain." 
  }
];
    return (
        <>
            <div className={`${styles.customers} container`}>
                <div className={`d-flex border-bottom ${styles.customer} justify-content-between align-items-center`}>
                    <div className="image w-25">
                        <img src={props.img} alt=" Team Member" className='img-fluid' />
                    </div>
                    <div className="text w-50">
                        <span className={styles.role}>{props.role}</span>
                        <h3 className={styles.name}>{props.name}</h3>
                    </div>.
                    <div className={`${styles.review}`}>
                        <p>"AN INCREDIBLE EXPERIENCE FROM START TO FINISH! THE TEAM WENT ABOVE AND BEYOND TO MEET OUR NEEDS. HIGHLY RECOMMEND!"</p>
                    </div>
                </div>
                <CarouselInterface name="jason .h" testinomial={`"RELIABLE, PROFESSIONAL, AND HIGHLY SKILLED. WE COULDN'T BE HAPPIER WITH THE RESULTS!"`}/>
            </div>
        </>
    )
}

export default Customers