import React from 'react'
import BigTitle from '../BigTitle'
import SmallTitle from '../SmallTitle'
import styles from './DigitalImpact.module.css'
import Counter from '../Counter'

const hasText = (value) =>
  typeof value === 'string' ? value.trim().length > 0 : Boolean(value)

const DigitalImpact = ({ bigTitle, smallTitle, records }) => {
  const impactRecords = Array.isArray(records) ? records : []

  return (
    <>
      <div className={`container ${styles.digitalImpact}`}>
        <div className="d-flex justify-content-center">
          {hasText(bigTitle) && <BigTitle bigTitle={bigTitle} />}
          {hasText(smallTitle) && <SmallTitle smallTitle={smallTitle} />}
        </div>
        <div className="row row-cols-1 row-cols-md-3 mt-4 justify-content-center">
          {impactRecords.map((record, index) => (
            <div
              key={record?.id || record?.title || index}
              className={`col ${styles.counterCard}`}
            >
              <Counter
                targetNumber={record?.targetNumber}
                title={record?.title}
                prefix={record?.prefix}
                duration={record?.duration}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DigitalImpact
