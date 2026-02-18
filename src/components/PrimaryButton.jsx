import React from 'react'
import styles from './PrimaryButton.module.css'
import { useNavigate } from 'react-router-dom'

const PrimaryButton = (props) => {
  const navigate = useNavigate()
  const buttonType = props.type || 'button'

  const handleClick = (event) => {
    if (props.disabled) return

    if (typeof props.onClick === 'function') {
      props.onClick(event)
      return
    }

    if (buttonType !== 'submit') {
      navigate('/contactpage')
    }
  }

  return (
    <>
    <button
      type={buttonType}
      disabled={props.disabled}
      onClick={handleClick}
      className={`bg-transparent text-light border-0 border-top-1 border-light ${styles.primaryButton} ${props.className || ''}`}
    >
      {props.btntxt}
    </button>
    </>
  )
}

export default PrimaryButton
