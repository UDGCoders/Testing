import React from 'react'
import styles from './Customers.module.css'
import CarouselInterface from './CarouselInterface';
import FadeImageSlider from './FadeImageSlider';

const Customers = (props) => {
    
    return (
        <>
            <div className={`${styles.customers} container`}>
                {/* Added styles.customer to ensure module styling applies */}
                <div className={`d-flex border-bottom ${styles.customer} gap-5 justify-content-between align-items-center`}>
                    
                    {/* Changed class="image" to className={styles.image} */}
                    <div className={`${styles.image} w-md-25 d-none d-md-block`}>
                        <FadeImageSlider images={props.img}/>
                    </div>

                    {/* Changed class="text" to className={styles.text} */}
                    <div className={`${styles.text} w-md-50`}>
                        <span className={styles.role}>{props.role}</span>
                        <h3 className={styles.name}>{props.name}</h3>
                    </div>

                    {/* styles.review was already correct */}
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