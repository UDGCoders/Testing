import React from 'react'

const ContactInfo = (props) => {
  const content = props.href ? (
    <a
      href={props.href}
      target={props.target}
      rel={props.rel}
      onClick={props.onClick}
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <span style={{ whiteSpace: 'pre-line' }}>{props.description}</span>
    </a>
  ) : props.onClick ? (
    <button
      type="button"
      onClick={props.onClick}
      style={{
        background: 'transparent',
        border: 'none',
        color: 'inherit',
        padding: 0,
        cursor: 'pointer'
      }}
    >
      <span style={{ whiteSpace: 'pre-line' }}>{props.description}</span>
    </button>
  ) : (
    <span style={{ whiteSpace: 'pre-line' }}>{props.description}</span>
  )
  return (
    <>
    <div className="text-center" style={{padding:'40px 0'}}>
           <h4> {props.title}</h4>
           <p>{content}</p>
    </div>
    </>
  )
}

export default ContactInfo
