import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactInfo = (props) => {
  const content = props.href ? (
    <a
      href={props.href}
      target={props.target}
      rel={props.rel}
      onClick={props.onClick}
      style={{ color: 'inherit', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
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
        cursor: 'pointer',
        textAlign: 'center'
      }}
    >
      <span style={{ whiteSpace: 'pre-line' }}>{props.description}</span>
    </button>
  ) : (
    <span style={{ whiteSpace: 'pre-line', textAlign: 'center', display: 'inline-block' }}>{props.description}</span>
  )
  return (
    <>
    <div className={`text-center d-flex flex-column align-items-center justify-content-center ${props.className || ''}`} style={{padding:'32px 20px'}}>
           {props.icon ? (
             <div style={{ marginBottom: '14px', marginTop:'-60%',position:'absolute' ,fontSize: '30px',height:'70px',width:'70px',border:'1px solid #ffffffc2',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
               <FontAwesomeIcon icon={props.icon} />
             </div>
           ) : null}
           <div className="mt-3">
           <h3> {props.title}</h3>

           </div>
           <div className="mt-3">
           <p style={{fontSize:'16px', marginBottom: 0, textAlign: 'center'}}>{content}</p>
           </div>
    </div>
    </>
  )
}

export default ContactInfo
