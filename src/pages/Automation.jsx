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
const Automation = () => {

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
            bigTitle="MEET THE AUTOMATIONS"
            smallTitle="THAT FREE UP YOUR SMARTEST PEOPLE"
            primaryText="Every project here started as a goal and became a measurable success. Dive in to see how AI, cybersecurity, and innovation come together."
            primaryButtonText="VIEW OUR WORK"
            secondaryButtonText="START YOUR SUCCESS STORY"
          />
        </div>
      </div>
      <div id="scroll-down">
      <Solutions
        cards={[
          {
            id: 1,
            imageSrc: "/wp-content/uploads/Group-1000008068-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Web Development & Revamps",
            text: "High-performance websites that are secure, responsive, and built to convertÂ from brochure sites to complex platforms."
          },
          {
            id: 2,
            imageSrc: "/wp-content/uploads/Group-1000008032.webp",
            imageAlt: "Web Development & Revamps",
            title: "AI Integrations",
            text: "Embed intelligence into your operations Â from predictive analytics to automated decision-making.Â "
          },
          {
            id: 3,
            imageSrc: "/wp-content/uploads/Group-1000008031.webp",
            imageAlt: "Web Development & Revamps",
            title: "Custom ChatbotsÂ ",
            text: "Conversational AI assistants that handle customer queries, book appointments, and collect leads 24/7.Â "
          },
          {
            id: 4,
            imageSrc: "/wp-content/uploads/Group-1000008030.webp",
            imageAlt: "Web Development & Revamps",
            title: "Business Dashboards",
            text: "Centralised dashboards that pull in live data from across your systems, so decision-making happens in real time."
          },
          {
            id: 5,
            imageSrc: "/wp-content/uploads/Group-1000008029.webp",
            imageAlt: "Web Development & Revamps",
            title: "CRM Solutions",
            text: "Tailored CRMs that track leads, manage clients, and automate follow-ups â€” all in one secure hub."
          },
          {
            id: 6,
            imageSrc: "/wp-content/uploads/Mask-group-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Endpoint SecurityÂ ",
            text: "Advanced device protection that stops malware, ransomware, and phishing before they impact your business."
          },
          {
            id: 7,
            imageSrc: "/wp-content/uploads/Mask-group-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Dark Web Monitoring",
            text: "Continuous scanning to detect stolen credentials or sensitive company data on the dark web"
          },

        ]}
      />
      </div>
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

export default Automation
