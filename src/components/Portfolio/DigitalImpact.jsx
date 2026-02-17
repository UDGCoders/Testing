import React from 'react'
import BigTitle from '../BigTitle'
import SmallTitle from '../SmallTitle'
import styles from './DigitalImpact.module.css'
import Counter from '../Counter'
const DigitalImpact = () => {
  return (
    <>
      <div className={`container ${styles.digitalImpact}`}>
        <div className="d-flex justify-content-center">
          <BigTitle bigTitle="Our Digital Impact" />
          <SmallTitle smallTitle="" />
        </div>
        <div className="row mt-4 justify-content-center">
          <div className={`col-md-3 ${styles.counterCard}`}>
            <Counter targetNumber="150" title=" Businesses Secured" prefix='+' />
          </div>
          <div className={`col-md-3 ${styles.counterCard}`}>
            <Counter targetNumber="300" title="IT & Automation Projects Delivered " prefix='+' />
          </div>
          <div className={`col-md-3 ${styles.counterCard}`}>
            <Counter targetNumber="700" title="Client Tech Costs Saved " prefix='K+' />
          </div>
          <div className={`col-md-3 ${styles.counterCard}`}>
            <Counter targetNumber="500" title="Cybersecurity Incidents Prevented" prefix='+' />
          </div>
          <div className={`col-md-3 ${styles.counterCard}`}>
            <Counter targetNumber="4" title="Industry-Specific AI Products" prefix='' />
          </div>
          <div className={`col-md-3 ${styles.counterCard}`}>
            <Counter targetNumber="24" title="Helpdesk Coverage " prefix='/7' />
          </div>
        </div>
      </div>
    </>
  )
}

export default DigitalImpact
