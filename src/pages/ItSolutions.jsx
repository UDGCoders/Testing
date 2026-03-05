import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import SplitSection from '../components/About/SplitSection'
import SpliteSectionLeft from '../components/About/SpliteSectionLeft';
import ClientsTestinomials from '../components/ClientsTestinomials';
import FAQSection from '../components/FAQSection';
import ScrollCards from '../components/Cards/ScrollCards';
import CenteredTexts from '../components/Services/CenteredTexts';
import useScrollTarget from '../hooks/useScrollTarget';
import { scrollCardsData } from '../constants/scrollCardsData';
import { Helmet } from 'react-helmet-async';

const   ItSolutions = () => {
     const texts = ["IT Solutions"];
     useScrollTarget()
     const navigate = useNavigate()
     const handleHeroScroll = (targetId) => {
       if (!targetId) return
       const hash = targetId.startsWith('#') ? targetId : `#${targetId}`
       navigate({ hash })
     }
     const goToContact = () => {
       navigate('/contactpage')
     }
     const features = [
    "Custom Web & Mobile Development",
    "AI Integration & Machine Learning",
    "Smart Infrastructure & IoT Systems",
    "Product Strategy & Launch Execution",
    "Backend Architecture & API Engineerings",
  ];
  const data =["Built on RMAAC’s legacy of compliance-first innovation",
    "Aligned to frameworks like HIPAA, PCI-DSS, GLBA & SOX",
    "Backed by AI, but driven by human insight",
    "Fully scalable for small offices to enterprise networks"
  ]
  return (
    
    <>
          <Helmet>
        <title>RMAAC</title>
        <meta name='description' content='Welcome to the site of most moderen world 3d websites will be built for you here'/>
        </Helmet>
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
            src="/wp-content/uploads/GettyImages-672335472-1.mp4"
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
            scrollTargetId="it-solutions-start"
            onScrollTarget={handleHeroScroll}
          />
        </div>
    </div>
    <div id="scroll-down">
          <SplitSection bigTitle="ENTERPRISE TECH WITH" 
    smallTitle="A BUILDER'S MINDSET" 
    primaryText="At RMAAC IT Solutions, we design and engineer the digital layer behind modern businesses. Whether you're building an Al product, setting up a secure remote infrastructure, or launching a web platform that's SEO-ready from day one — we're your full-stack technology partner." 
    btntxt="Let’s talk about what you’re building"
    onButtonClick={goToContact}
    src="/wp-content/uploads/image-1-1.webp"
    />
    </div>

    <SpliteSectionLeft bigTitle="Full Service Tech."
    smallTitle="Grounded in Execution"
    primaryText="Unlike typical IT firms, we don’t just deliver “solutions” — we deliver operational impact. Every project we take on is designed around real constraints, real timelines, and measurable outcomes."
    listHeading="What We Do Best:"
    listData={features}
    src="/wp-content/uploads/image-2-2.avif"
    />
    <SplitSection bigTitle="Spotlight Project"
    smallTitle="AI-Vigil"
    primaryText="Project AIVigil is RMAAC’s dedicated initiative to protect businesses from the inside out — not just against known risks, but the ones emerging every day.From phishing-resistant email security to AI-driven threat detection, AIVigil delivers integrated risk management tailored for real-world operations. Whether you're a law firm navigating compliance, a healthcare provider safeguarding PHI, or a logistics company defending uptime — AIVigil equips you with 24/7 monitoring, rapid response, and strategic cybersecurity leadership."
    listdata={data}
    listHeading="Why AI Vigil"
    src="/wp-content/uploads/image-3-1.avif"
    />
    <ClientsTestinomials bigTitle="CLIENT'S WHO'VE BUILT " smallTitle="With Us" clientName="Zahra N — Manager, USA" clientReview="RMAAC helped us move from idea to MVP in six weeks — with backend, AI workflows, and real-world testing included. They’re fast, direct, and think like product people"/>
     <ClientsTestinomials clientName="Zeeshan I — Hotel Owner, Hunza" clientReview="From check-in automation to backend accounting — they built us a platform that just works. It’s already part of how we run the business"/>
      <FAQSection/>
  

   
    <CenteredTexts bigTitle="LET'S BUILD THE INFRASTRUCTURE"
    smallTitle="BEHIND YOUR NEXT MOVE"
    primaryText="Whether you're launching a tech-driven product or upgrading the digital core of your operations, RMAAC brings end-to-end execution. We think in roadmaps, data points, and real-world delivery."
    btntxt="START YOUR DISCOVERY Call"
    onButtonClick={goToContact}/>
     <ScrollCards cards={scrollCardsData} />
    </>
  )
}

export default ItSolutions
