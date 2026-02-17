import React from 'react'
import styles from './PrimaryButton.module.css'
const PrimaryButton = (props) => {
  return (
    <>
    <button
      type={props.type || 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`bg-transparent text-light border-0 border-top-1 border-light ${styles.primaryButton} ${props.className || ''}`}
    >
      {props.btntxt}
    </button>
    </>
  )
}

export default PrimaryButton
