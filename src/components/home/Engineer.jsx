import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Engineer.css'
import Card from '../../Card';
const Engineer = () => {
  return (
    <>
    <div className="engineered container">
        <div className="row">
        <div className="left col-md-6">
            <h2 className='main'>YOUR FUTURE </h2>
            <h2>ENGINEERED BY AI</h2>
            <p>FROM SMARTER HEALTHCARE TO SECURE IT AND MODERN LIVING, WE DESIGN VENTURES THAT BRING AI INTO EVERYDAY IMPACT.</p>
        </div>
        <div className="right col-md-6">
            <img src="wp-content/uploads/2026/01/image.webp"
             alt="ai engineered pic" className='img-fluid' loading='lazy' />
        </div>
        </div>
    </div>
    <div className="cards container">
        <Card title="Our Work" src="wp-content/uploads/2026/01/our-work-1.webp"/>
        <Card title="Work with us" src="wp-content/uploads/2026/01/work-with-us.webp"/>
        <Card title="Services" src="wp-content/uploads/2026/01/services.webp"/>
        <Card title="About Us" src="wp-content/uploads/2026/01/about-us.webp"/>
    </div>
    </>
  )
}

export default Engineer