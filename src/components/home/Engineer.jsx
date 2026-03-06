import React from 'react'
import './Engineer.css'
import Card from '../../Card';
import WordPressImage from '../WordPressImage';
const Engineer = () => {
    const myImageData = {
        full: { source_url: "/wp-content/uploads/image.webp", width: 1200 },
        large: { source_url: "/wp-content/uploads/image-768x512.webp", width: 768 },
        medium: { source_url: "/wp-content/uploads/image-300x200.webp", width: 300 }
    };
    const cardImages = {
        ourWork: {
            full: { source_url: "/wp-content/uploads/our-work-1.webp", width: 1200 },
            large: { source_url: "/wp-content/uploads/our-work-1-768x512.webp", width: 768 },
            medium: { source_url: "/wp-content/uploads/our-work-1-300x200.webp", width: 300 }
        },
        workWithUs: {
            full: { source_url: "/wp-content/uploads/work-with-us.webp", width: 1200 },
            large: { source_url: "/wp-content/uploads/work-with-us-768x512.webp", width: 768 },
            medium: { source_url: "/wp-content/uploads/work-with-us-300x200.webp", width: 300 }
        },
        services: {
            full: { source_url: "/wp-content/uploads/services.webp", width: 1200 },
            large: { source_url: "/wp-content/uploads/services-768x512.webp", width: 768 },
            medium: { source_url: "/wp-content/uploads/services-300x200.webp", width: 300 }
        },
        about: {
            full: { source_url: "/wp-content/uploads/about-us.webp", width: 1200 },
        },
    };
    return (
        <>
            <div className="engineered container">
                <div className="row">
                    <div className="left col-md-6">
                        <h1 className='main'>YOUR FUTURE </h1>
                        <h1>ENGINEERED BY AI</h1>
                        <p>FROM SMARTER HEALTHCARE TO SECURE IT AND MODERN LIVING, WE DESIGN VENTURES THAT BRING AI INTO EVERYDAY IMPACT.</p>
                    </div>
                    <div className="right col-md-6">
                        <WordPressImage mediaSizes={myImageData} />
                        {/* <img src="/wp-content/uploads/image.webp"
             alt="" className='img-fluid' loading='lazy' /> */}

                    </div>
                </div>
            </div>
            <div className="cards container">
                <Card
                    title="Our Work"
                    mediaSizes={cardImages.ourWork}
                    rsrc="/portfoliopage"
                />
                <Card 
                    title="Work with us" 
                    mediaSizes={cardImages.workWithUs} 
                    rsrc="/portfoliopage"
                />
                <Card
                    title="Services"
                    mediaSizes={cardImages.services}
                    rsrc="/servicespage"
                />
                <Card
                    title="About Us"
                    mediaSizes={cardImages.about}
                    rsrc="/about"
                />
                {/* <Card title="Work with us" src="/wp-content/uploads/work-with-us.webp" rsrc="/contactpage"/> */}
                {/* <Card title="Services" src="/wp-content/uploads/services.webp" rsrc="/servicespage"/> */}
                {/* <Card title="About Us" src="/wp-content/uploads/about-us.webp" rsrc="/about"/> */}
            </div>
        </>
    )
}

export default Engineer
