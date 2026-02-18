import React from 'react'
import { useNavigate } from "react-router-dom";
import Hero from '../components/Hero'
import useScrollTarget from '../hooks/useScrollTarget';
import SplitSection from '../components/About/SplitSection';
import SpliteSectionLeft from '../components/About/SpliteSectionLeft';
const Portfolio = () => {
    const texts = ["OUR PORTFOLIO"];
    
    useScrollTarget();
    const navigate = useNavigate();
    const goToAutomation = () => navigate('/automationpage');
    const goToDigitalSuccess = () => navigate('/digitalsuccesspage');
    const goToRealPortfolio = () => navigate('/realestateportfoliopage');
    const goToMobileSolution = () => navigate('/mobilesolutionpage');
    const goToHealthcare = () => navigate('/healthcarepage');
    return (
        <>
            <div className="headerbackground h-100">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="background-video"
                    preload="none"
                    loading="lazy"
                >
                    <source
                        src="/wp-content/uploads/about-bg-video-1.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="video-overlay"></div>
                <div className="header-content">
                    {/*
           * Animated text down to top animation
           */}
                    <Hero
                        animatedTexts={texts}
                        
                    />
                </div>
            </div>
            <SplitSection bigTitle="AUTOMATIONS & "
                smallTitle="CYBERSECURITY"
                primaryText="From AI-driven monitoring to enterprise-grade cybersecurity for SMBs, our automation and IT solutions redefine how businesses operate. With projects like AI-Vigil, we’ve built scalable, secure systems that cut downtime, protect data, and simplify IT for companies across North America."
                btntxt="SEE FULL PORTFOLIO"
                onButtonClick={goToAutomation}
                id="scroll-down"


                videoSrc="/wp-content/uploads/automations-1.mov"
                autoPlay
                loop
                muted
                playsInline
            />
            <SpliteSectionLeft videoSrc="/wp-content/uploads/digital-1.mov"
                id="digital-solutions"
                autoPlay
                loop
                muted
                playsInline
                bigTitle="DIGITAL SUCCESS"
                primaryText="Through companies like Markalytics, we’ve delivered global digital campaigns, SEO programs, and brand transformations. From web revamps to full-scale marketing automation, our work has helped businesses grow visibility, capture leads, and convert clicks into long-term customers across three continents."
                btntxt="SEE FULL PORTFOLIO"
                onButtonClick={goToDigitalSuccess}

            />
            <SplitSection bigTitle="REAL ESTATE"
                id="real-estate"
                primaryText="Our journey started in real estate  from Enclave Business Center to luxury projects like Zen Retreats. We combine strong design, investor-focused branding, and tech integrations to create developments that don’t just build spaces, but also generate long-term value and sustainable growth."
                btntxt="SEE FULL PORTFOLIO"
                onButtonClick={goToRealPortfolio}


                videoSrc="/wp-content/uploads/real-estate-1.mov"
                autoPlay
                loop
                muted
                playsInline
            />
            <SpliteSectionLeft videoSrc="/wp-content/uploads/mobile-solutions-2.mov"
                autoPlay
                loop
                muted
                playsInline
                bigTitle="MOBILE SOLUTIONS"
                primaryText="With projects like the Vividly App and upcoming marine-tech platforms, we’ve entered mobile solutions with a focus on usability, speed, and monetization. Our apps are built to merge advanced AI features with simple user experiences delivering tools people actually use every day."
                btntxt="SEE FULL PORTFOLIO"
                onButtonClick={goToMobileSolution}

            />
            <SplitSection bigTitle="HEALTHCARE"
                id="health-care"
                primaryText="In healthcare, we've built brands like Premier Private GP, a UK-based clinic trusted by 1,000+ patients. Our work spans brand identity, digital infrastructure, and high-conversion campaigns, helping healthcare providers modernize patient experiences while scaling their operations with trust and care. "
                btntxt="SEE FULL PORTFOLIO"
                onButtonClick={goToHealthcare}


                videoSrc="/wp-content/uploads/healthcare-1.mov"
                autoPlay
                loop
                muted
                playsInline
            />
        </>
    )
}

export default Portfolio
