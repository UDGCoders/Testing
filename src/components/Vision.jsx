import React from 'react'
import CardTwo from './CardTwo'
import styles from './Vision.module.css'
const Vision = (props) => {
  return (
    <>
      <div className="container-fluid vision-container">
        <video
          src={props.src}
          autoPlay={props.autoPlay}
          loop={props.loop}
          muted={props.muted}
          playsInline={props.playsInline}
          preload={props.preload || 'none'}
          loading={props.loading || 'lazy'}
          className={props.className}
        />
        <div className={`container-fluid py-md-3 ${styles.visionInner}`}>
          <div className={styles.cards}>
            <div className="row g-md-5 g-3 justify-content-md-center">
              <div className="col-md-6">
                <CardTwo src="/wp-content/uploads/empowering-1.webp" title="DRIVEN BY AI" description="WE BUILD SMARTER TOOLS POWERED BY DATA AND AUTOMATION TO OPEN DOORS TO NEW POSSIBILITIES." />
              </div>
              <div className="col-md-6">
                <CardTwo src="/wp-content/uploads/empowering-2.webp" title="OUR VISION" description="WE BELIEVE TECHNOLOGY SHOULD SERVE HUMANITY, AND WE WORK EVERYDAY TO MAKE THAT VISION REAL" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vision
