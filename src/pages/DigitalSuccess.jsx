import React from 'react'
// import { useNavigate } from "react-router-dom";

import useScrollTarget from '../hooks/useScrollTarget';
import PortfolioHero from '../components/Portfolio/PortfolioHero';
import Solutions from '../components/Portfolio/Solutions';
import CaseStudySection from '../components/Portfolio/CaseStudySection';
import DigitalImpact from '../components/Portfolio/DigitalImpact';
import Reasons from '../components/Reasons';
import Fixes from '../components/Portfolio/Fixes'
import CenteredTexts from '../components/Services/CenteredTexts';
const DigitalSuccess = () => {

  useScrollTarget();
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
            src="/wp-content/uploads/automations-bg-1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay"></div>
        <div className="header-content">
          <PortfolioHero
            bigTitle="MEET THE PROOF"
            smallTitle="OF OUR DIGITAL IMPACT"
            primaryText="Every project here started as a goal and became a measurable success. Dive in to see how strategy, creativity, and execution come together to deliver."
            primaryButtonText="VIEW OUR WORK"
            secondaryButtonText="START YOUR SUCCESS STORY"
          />
        </div>
      </div>
      <Solutions
        cards={[
          {
            id: 1,
            imageSrc: "/wp-content/uploads/Group-1000008068-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Branding Strategy",
            text: "Building brands with a clear voice, sharp visuals, and a story worth remembering."
          },
          {
            id: 2,
            imageSrc: "/wp-content/uploads/Group-1000008032.webp",
            imageAlt: "Web Development & Revamps",
            title: "Website Revamp",
            text: "Taking what’s there, making it faster, cleaner, and built to convert from day one."
          },
          {
            id: 3,
            imageSrc: "/wp-content/uploads/Group-1000008031.webp",
            imageAlt: "Web Development & Revamps",
            title: "Copywriting",
            text: "Turning ideas into words that move people and keep them clicking."
          },
          {
            id: 4,
            imageSrc: "/wp-content/uploads/Group-1000008030.webp",
            imageAlt: "Web Development & Revamps",
            title: "SEO",
            text: "Turning ideas into words that move people and keep them clicking."
          },
          {
            id: 5,
            imageSrc: "/wp-content/uploads/Group-1000008029.webp",
            imageAlt: "Web Development & Revamps",
            title: "Campaigns",
            text: "Launching targeted campaigns that don’t just get noticed, they get results."
          },
          {
            id: 6,
            imageSrc: "/wp-content/uploads/Mask-group-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Social Media",
            text: "Keeping brands active, relevant, and impossible to scroll past."
          },

        ]}
      />
      <CaseStudySection />
      <DigitalImpact />
      <Reasons
        bigTitle="That’s just the tip of the"
        smallTitle="Iceberg"
        titleDescription="Great outcomes aren't magic - they're method. Behind every polished deliverable is months of precision work."
        inline
        cardColClass="col-md-5"
        variant="automation"
        cards={[
          {

            title: "IT & Cybersecurity",
            text: "We incubate and create new ventures with real-world relevance",
            list: ["24/7 endpoint protection", "AI-powered threat detection", "Dark web monitoring", "Advanced email security", "Compliance-ready backups"],

          },
          {

            title: "Automations",
            text: "We invest with aligned teams and strategic collaborators",
            list:["AI-driven CRM workflows","Automated onboarding sequences ","Smart reporting dashboards ","License & tool usage audits ","Predictive maintenance alerts "],
          },
          {

            title: "Cloud & Infrastructure ",
            list:["Microsoft 365 setup & optimization","Secure cloud migrations ","Network monitoring & patching ","Disaster recovery solutions ","Hardware-as-a-service "],
          },
          {

            title: "Campaigns & Outreach ",
            list:["Industry-specific lead funnels ","Automated email sequences ","Conversion-focused landing pages ","Multi-channel remarketing ","ROI tracking & reporting "],
          },
        ]}
      />
      <Fixes bigTitle2="£7K Back in Your Pocket." bigTitle1="68%" smallTitle="Faster Fixes."/>
      <CenteredTexts bigTitle="Ready to Turn Your IT into a Growth Story?" primaryText="Let’s ditch the endless “IT headaches” and build you a setup that actually fuels your business with airtight security, smart automations, and measurable wins." btntxt="Let’s Get Started"/>
    </>
  )
}

export default DigitalSuccess
