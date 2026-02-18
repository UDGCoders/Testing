import React from 'react'
import BigTitle from '../BigTitle'
import SmallTitle from '../SmallTitle'
import PrimaryText from '../PrimaryText'
import PrimaryButton from '../PrimaryButton'
import styles from './CenteredTexts.module.css'

const CenteredTexts = (props) => {
  return (
    <>
      <div className={`container mt-md-5 mt-3 mb-md-5 mb-md-3 ${styles.centeredContainer}`}>
        <div className="text-center d-flex flex-column justify-content-center align-items-center">
          {/* <div className="d-flex gap-3"> */}
          <BigTitle bigTitle={props.bigTitle} />
          <SmallTitle smallTitle={props.smallTitle} />
          {/* </div> */}
          <div className={styles.textWidth}>
            <div className="mt-3">
              <PrimaryText primaryText={props.primaryText} />
            </div>
          </div>

          <PrimaryButton btntxt={props.btntxt} onClick={props.onButtonClick} />

        </div>
      </div>
    </>
  )
}

export default CenteredTexts
